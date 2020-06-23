/* eslint-env mocha */

const expect = require('chai').expect
const markdownify = require('./../../nunjuck-filters/markdownify')

describe('markdownify filter', function () {
  it('should return HTML from Markdown', function () {
    // Yes, this looks like garbage - but whitespacing and newlines affect the
    // output - so this needs to have no left spacing.
    const markdown =
`# Heading level one
## Heading level two

This is a test of the **markdown**, which is _nice_.

  - test
  - test
  - test
`

    const expected =
`<h1>Heading level one</h1>
<h2>Heading level two</h2>
<p>This is a test of the <strong>markdown</strong>, which is <em>nice</em>.</p>
<ul>
<li>test</li>
<li>test</li>
<li>test</li>
</ul>
`

    expect(markdownify.render(markdown)).to.equal(expected)
  })

  it('should give correct code block for SCSS code blocks', function () {
    const scss = `
\`\`\`scss
.this-is-some-sassy-css {
  display: boom;
}
\`\`\`
`

    const expected =
`<pre class='language--scss' data-language='Sassy CSS'><code><span class="token selector">.this-is-some-sassy-css </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> boom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
`
    expect(markdownify.render(scss)).to.equal(expected)
  })

  it('should give correct code block for CSS code blocks', function () {
    const css = `
\`\`\`css
.this-is-some-css {
  display: boom;
}
\`\`\`
`

    const expected =
`<pre class='language--css' data-language='CSS'><code><span class="token selector"><span class="token class">.this-is-some-css</span></span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> boom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
`

    expect(markdownify.render(css)).to.equal(expected)
  })

  it('should give correct code block for JavaScript code blocks', function () {
    const javascript = `
\`\`\`js
(() => {
  console.boom('woop woop')
})()
\`\`\`
`

    const expected =
`<pre class='language--js' data-language='JavaScript'><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">boom</span><span class="token punctuation">(</span><span class="token string">'woop woop'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
`

    expect(markdownify.render(javascript)).to.equal(expected)
  })

  it('should give correct code block for Nunjucks code blocks', function () {
    const javascript = `
\`\`\`nunjucks
{% extend 'base.njk' %}

{% block main %}
  <h2>Main content</h2>
  {{ content | markdownify | safe }}
{% endblock %}
\`\`\`
`

    const expected =
`<pre class='language--jinja2' data-language='Nunjucks'><code><span class="token jinja2 language-jinja2"><span class="token delimiter punctuation">{%</span> <span class="token tag keyword">extend</span> <span class="token string">'base.njk'</span> <span class="token delimiter punctuation">%}</span></span>

<span class="token jinja2 language-jinja2"><span class="token delimiter punctuation">{%</span> <span class="token tag keyword">block</span> <span class="token variable">main</span> <span class="token delimiter punctuation">%}</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token jinja2 language-jinja2"><span class="token delimiter punctuation">{{</span> <span class="token variable">content</span> <span class="token operator">|</span> <span class="token variable">markdownify</span> <span class="token operator">|</span> <span class="token variable">safe</span> <span class="token delimiter punctuation">}}</span></span>
<span class="token jinja2 language-jinja2"><span class="token delimiter punctuation">{%</span> <span class="token tag keyword">endblock</span> <span class="token delimiter punctuation">%}</span></span>
</code></pre>
`

    expect(markdownify.render(javascript)).to.equal(expected)
  })
})
