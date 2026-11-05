'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, Check, ChevronDown, Code2, Copy, GitBranch, Menu, Play, Terminal, X, Zap } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Fast by default', text: 'Native speed without the ceremony. Vira compiles close to the metal and stays out of your way.' },
  { icon: Code2, title: 'Readable syntax', text: 'Clear, expressive syntax with immutability by default, string interpolation, and familiar control flow.' },
  { icon: Terminal, title: 'Batteries included', text: 'A tiny toolchain, a friendly package manager, and everything you need to ship your first idea.' },
]

const code = `module basics

const APP_NAME = 'Vira'

fn main() {
  company_name := 'VexCorp'
  mut headcount := 42
  headcount = headcount + 5

  println('\${company_name} welcomes you to \${APP_NAME}!')
  println('Headcount: \${headcount}')
}`

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'mac' | 'linux' | 'windows'>('mac')

  const copyCode = async () => {
    await navigator.clipboard?.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="site-shell">
      <div className="top-strip"><span>VIRA / فيرا</span><span>AN OPEN SOURCE LANGUAGE FROM EGYPT</span><span>EST. 2024</span></div>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Vira home"><span className="brand-mark">V</span><span>VIRA</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>WHY VIRA</a>
          <a href="/docs" onClick={() => setMenuOpen(false)}>DOCS</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>COMMUNITY</a>
          <a href="https://github.com/viralang/vira" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>GITHUB <ArrowRight size={13} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <a className="nav-cta" href="#install">GET STARTED <ArrowRight size={15} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> A programming language for curious minds</div>
          <h1>Write code<br /><em>that speaks.</em></h1>
          <p className="hero-lede">Vira is a modern, high-performance systems and AI language born in Egypt. Simple enough to learn on a weekend. Powerful enough to keep.</p>
          <div className="hero-actions"><a className="button button-dark" href="#install">START BUILDING <ArrowRight size={17} /></a><a className="text-link" href="https://github.com/viralang/vira" target="_blank" rel="noreferrer"><GitBranch size={17} /> VIEW ON GITHUB</a></div>
          <div className="hero-note"><span>♥</span> Made in Egypt, with patience, coffee &amp; a love of fast software.</div>
        </div>
        <div className="hero-art" aria-label="Vira language terminal preview">
          <div className="sun-stamp">EG<br /><strong>مصر</strong></div>
          <div className="terminal-card">
            <div className="terminal-top"><span className="terminal-dots"><i /><i /><i /></span><span>hello.vira</span><span className="terminal-lang">VIRA 0.4.2</span></div>
            <pre><code><span className="line-no">01</span> <span className="kw">module</span> <span className="fn">basics</span>{`\n`}<span className="line-no">02</span> {`\n`}<span className="line-no">03</span> <span className="kw">mut</span> headcount := <span className="num">42</span>{`\n`}<span className="line-no">04</span> headcount = headcount + <span className="num">5</span>{`\n`}<span className="line-no">05</span> <span className="fn">println</span>(<span className="str">&apos;Headcount: {'${headcount}'}&apos;</span>)</code></pre>
            <div className="terminal-status"><span><span className="status-dot" /> compiled in 0.08s</span><span>▶ RUN</span></div>
          </div>
          <div className="scribble">less syntax.<br />more signal.</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><span>EGYPTIAN ORIGIN</span><b>✳</b><span>MODERN TOOLS</span><b>✳</b><span>OPEN SOURCE</span><b>✳</b><span>HUMAN SCALE</span><b>✳</b><span>EGYPTIAN ORIGIN</span><b>✳</b><span>MODERN TOOLS</span></div>

      <section className="intro section-grid" id="why">
        <div className="section-kicker">01 / THE IDEA</div>
        <div><h2>Software with<br /><span>a point of view.</span></h2><p className="big-copy">Vira is a modern, high-performance systems and AI language. It combines C and Rust-level control with Go-like simplicity, deterministic autofree memory, SIMD tensors, and supervised actors.</p><a className="arrow-link" href="https://github.com/viralang/vira/blob/main/README.md" target="_blank" rel="noreferrer">READ THE README <ArrowRight size={16} /></a></div>
      </section>

      <section className="features" aria-label="Vira features">{features.map(({ icon: Icon, title, text }, index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><Icon size={25} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</section>

      <section className="learn section-grid" id="learn">
        <div className="section-kicker">02 / A TASTE OF VIRA</div>
        <div className="learn-content"><div className="learn-heading"><h2>Small language.<br /><span>Big hello.</span></h2><button className="copy-button" onClick={copyCode}>{copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'COPIED' : 'COPY CODE'}</button></div><div className="code-window"><div className="code-header"><span><span className="status-dot" /> hello.vira</span><span>VIRA</span></div><pre><code>{code}</code></pre><div className="code-footer"><span>5 lines</span><span>UTF-8</span><button aria-label="Run code"><Play size={14} fill="currentColor" /> RUN EXAMPLE</button></div></div><p className="code-caption">Clean, expressive, and surprisingly familiar. That&apos;s the idea.</p></div>
      </section>

      <section className="install" id="install"><div className="install-inner"><div className="section-kicker light">03 / GET VIRA</div><h2>Ready when<br /><em>you are.</em></h2><p>Install the compiler, open your terminal, and make something that matters.</p><div className="platform-tabs" role="tablist">{(['mac', 'linux', 'windows'] as const).map(tab => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab}>{tab === 'mac' ? 'macOS' : tab[0].toUpperCase() + tab.slice(1)}</button>)}</div><div className="install-command"><span>$</span> {activeTab === 'windows' ? 'irm https://raw.githubusercontent.com/viralang/vira/main/scripts/install.ps1 | iex' : 'curl -fsSL https://raw.githubusercontent.com/viralang/vira/main/scripts/install.sh | bash'}</div><a className="button button-coral" href="https://github.com/viralang/vira/blob/main/docs/tutorials/README.md" target="_blank" rel="noreferrer">READ THE TUTORIALS <BookOpen size={16} /></a></div><div className="install-ascii" aria-hidden="true">{`  /\\_/\\
 ( o.o )
  > ^ <

  VIRA
  ๐ ๐ ๐`}</div></section>

      <section className="community section-grid" id="community"><div className="section-kicker">04 / COME SAY HI</div><div><h2>There&apos;s room<br /><span>at the table.</span></h2><p className="big-copy">Vira is built in the open, with people who care about craft, language, and making the internet a little more interesting.</p><div className="community-links"><a href="https://github.com/viralang/vira" target="_blank" rel="noreferrer"><GitBranch size={19} /> GITHUB REPOSITORY <ArrowRight size={15} /></a><a href="https://github.com/viralang/vira/blob/main/docs/tutorials/README.md" target="_blank" rel="noreferrer"><BookOpen size={19} /> DOCUMENTATION <ArrowRight size={15} /></a></div></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">V</span><span>VIRA</span></div><p>لغة صغيرة، أحلام كبيرة<br /><span>A little language for big dreams.</span></p><div className="footer-meta"><span>© 2024 Vira contributors</span><span>Made in Egypt</span></div></footer>
    </main>
  )
}
