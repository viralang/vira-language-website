'use client'

import { ArrowLeft, ArrowUpRight, BookOpen, Cpu, FileCode2, Gauge, Layers3, Package, ShieldCheck, Sparkles, Terminal, Waypoints, Zap } from 'lucide-react'

const features = [
  ['01', 'Deterministic autofree memory', 'Static escape analysis injects LIFO destructors at scope exits. No tracing garbage collector or stop-the-world pauses.', ShieldCheck],
  ['02', '4-quadrant mutability', 'Immutable by default, with precise default, mut:, pub:, and pub mut: field visibility and mutation controls.', Layers3],
  ['03', 'Mandatory Result handling', 'The !T result type makes failures explicit. Unwrap with or { ... } or propagate with ! before code can run.', ShieldCheck],
  ['04', 'AI tensors and SIMD', 'First-class 1D–4D tensor primitives, @ matrix multiplication, AVX2/FMA, SSE2, and ARM NEON acceleration.', Cpu],
  ['05', 'Native SafeTensors and GGUF', 'Load Hugging Face weights and local LLM models in pure Vira with Q4_0/Q8_0 dequantization and token sampling.', Sparkles],
  ['06', 'Supervised actor concurrency', 'Isolated actors communicate with <- and run across a Chase-Lev work-stealing pool with OneForOne restarts.', Waypoints],
  ['07', 'C99 compiler backend', 'Lower readable Vira directly to portable C99 for GCC, Clang, MinGW-w64, or TCC.', FileCode2],
  ['08', 'Native C and Python FFI', 'Use extern C, raw pointers, unsafe boundaries, and shared-library exports for zero-overhead interop.', Package],
  ['09', 'HTTP and pure-Vira JSON', 'Build asynchronous HTTP/1.1 services with a pure RFC 8259 JSON parser and O(N) JsonBuilder.', Zap],
  ['10', 'Desktop GUI toolkit', 'Create Win32/X11 native windows with immediate-mode widgets, declarative layouts, navigation, and dashboards.', Gauge],
  ['11', 'Package management', 'Scaffold projects, add dependencies, lock versions, vendor for air-gapped builds, and keep projects reproducible.', Package],
  ['12', 'Rust/V-style diagnostics', 'Friendly compiler errors with source spans, notes, suggestions, and precise type-checking feedback.', BookOpen],
]

const tutorials = [
  ['01', 'Syntax & basics', 'Beginner', '01_getting_started_and_basics.md', 'Immutability, mut, primitives, interpolation, if/else, and the blank identifier.'],
  ['02', 'OOP & encapsulation', 'Intermediate', '02_oop_and_4_quadrant_structs.md', 'Struct access levels, embedding, promoted fields, and receivers.'],
  ['03', 'Structural interfaces', 'Intermediate', '03_interfaces_and_polymorphism.md', 'Implicit interfaces, boxing, vtables, and destructor chaining.'],
  ['04', 'Result error handling', 'Intermediate', '04_error_handling_and_results.md', '!T results, or blocks, fallbacks, and compile-time safety.'],
  ['05', 'Autofree & arenas', 'Advanced', '05_autofree_and_bump_arenas.md', 'Scope-exit cleanup, escape analysis, and O(1) arena teardown.'],
  ['06', 'SIMD AI tensors', 'Intermediate', '06_simd_tensors_and_ai_math.md', 'tensor[f32], @ multiplication, AVX2/NEON, and forward passes.'],
  ['07', 'Actors & supervisors', 'Advanced', '07_actor_concurrency_and_supervisors.md', 'Actors, <- dispatch, futures, panic containment, and restarts.'],
  ['08', 'Production pipeline', 'Advanced', '08_building_production_systems.md', 'A complete system combining interfaces, actors, errors, and memory safety.'],
  ['09', 'Native file I/O', 'Advanced', '09_file_io_and_streams.md', 'Atomic writes, appending, reads, deletion, and Result handling.'],
  ['10', 'Multicore concurrency', 'Advanced', '10_threads_actors_fault_tolerance.md', 'Work-stealing, isolation, fault boundaries, and arena wipes.'],
  ['11', 'Control flow & loops', 'Beginner', '11_control_flow_loops_operators.md', 'Unified for loops, branching, operators, break, and continue.'],
  ['12', 'Deep dive AI tensors', 'Advanced', '12_deep_dive_ai_tensors_and_simd.md', 'Aligned tensors, vectorization, and zero-allocation inference.'],
  ['13', 'Hardware acceleration', 'Advanced', '13_hardware_acceleration_gpu_npu.md', 'CUDA/ROCm, Metal DMA, PCIe alignment, and GPU fault recovery.'],
  ['14', 'Neural networks', 'Advanced', '14_neural_network_cpu_gpu_inference.md', 'MLP inference, SIMD execution, GPU actors, and CPU fallback.'],
  ['15', 'Pretrained weights', 'Advanced', '15_loading_pretrained_models_weights.md', 'Zero-copy binary weights and asynchronous model serving.'],
  ['16', 'Compilation & deployment', 'Beginner / Advanced', '16_compilation_and_deployment.md', 'AOT builds, production flags, static linking, and containers.'],
  ['17', 'HTTP & fast JSON', 'Advanced', '17_http_web_service_and_json.md', 'JSON field parsing, HTTP responses, actors, and leak-free services.'],
  ['18', 'Autograd & SafeTensors', 'Advanced', '18_autograd_and_safetensors.md', 'Native weights, SIMD backpropagation, and in-place SGD.'],
  ['19', 'Local LLM engine', 'Expert', '20_gguf_llm_inference_engine.md', 'GGUF parsing, quantization, RoPE, RMSNorm, SwiGLU, and sampling.'],
  ['20', 'Tooling, LSP & packages', 'Beginner / Advanced', '19_tooling_lsp_and_package_management.md', 'vira init, manifests, fmt, test, and the language server.'],
]

const githubDocs = 'https://github.com/viralang/vira/tree/main/docs/tutorials'

export default function DocsPage() {
  return (
    <main className="docs-shell">
      <header className="docs-header"><a className="brand" href="/"><span className="brand-mark">V</span><span>VIRA</span></a><span className="docs-label">LANGUAGE GUIDE / 2024</span><a className="docs-github" href={githubDocs} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a></header>
      <section className="docs-hero"><a className="back-link" href="/"><ArrowLeft size={15} /> BACK TO VIRA</a><div className="section-kicker">THE OFFICIAL FIELD GUIDE</div><h1>Build close<br /><em>to the metal.</em></h1><p>Everything in the Vira language, collected from the README and the runnable tutorials. Learn the syntax, then ship systems, AI, web services, and desktop apps.</p><div className="docs-meta"><span><BookOpen size={16} /> 39 tutorials</span><span><Terminal size={16} /> 43 runnable examples</span><span><Zap size={16} /> Vira 0.7.2</span></div></section>
      <section className="docs-section" id="features"><div className="docs-section-heading"><div className="section-kicker">01 / LANGUAGE FEATURES</div><h2>The whole<br /><span>toolbox.</span></h2><p>Vira combines C and Rust-level control with Go-like simplicity, instant compilation, and a focused standard library.</p></div><div className="feature-list">{features.map((feature, index) => { const [number, title, text, Icon] = feature as [string, string, string, typeof Zap]; const FeatureIcon = Icon; return <article className="docs-feature" key={`${number}-${index}`}><span className="docs-number">{number}</span><FeatureIcon size={22} /><h3>{title}</h3><p>{text}</p></article> })}</div></section>
      <section className="docs-section tutorial-section" id="tutorials"><div className="docs-section-heading"><div className="section-kicker">02 / TUTORIAL INDEX</div><h2>Start anywhere.<br /><span>Go deep.</span></h2><p>Step-by-step guides paired with runnable .vir examples. Open the source on GitHub and learn by doing.</p><a className="button button-dark" href={githubDocs} target="_blank" rel="noreferrer">OPEN ALL TUTORIALS <ArrowUpRight size={16} /></a></div><div className="tutorial-list">{tutorials.map(([number, title, level, file, text]) => <a className="tutorial-row" href={`https://github.com/viralang/vira/blob/main/docs/tutorials/${file}`} target="_blank" rel="noreferrer" key={number}><span className="tutorial-number">{number}</span><span className="tutorial-main"><strong>{title}</strong><small>{text}</small></span><span className="tutorial-level">{level}</span><ArrowUpRight size={16} /></a>)}</div></section>
      <footer><div className="footer-brand"><span className="brand-mark">V</span><span>VIRA</span></div><p>لغة صغيرة، أحلام كبيرة<br /><span>A little language for big dreams.</span></p><div className="footer-meta"><span>© 2024 Vira contributors</span><span>Made in Egypt</span></div></footer>
    </main>
  )
}
