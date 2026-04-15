import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="min-h-screen bg-base-200 p-8 font-sans">
  
  <section class="hero bg-base-100 rounded-box shadow-xl mb-8 p-10">
    <div class="hero-content text-center flex-col">
      <div class="relative flex justify-center items-center mb-4">
        <img src="${heroImg}" class="max-w-xs" width="170">
        <div class="absolute -bottom-4 flex gap-2">
          <div class="avatar">
            <div class="w-12 rounded-full bg-yellow-400 p-2 shadow-lg">
              <img src="${javascriptLogo}" alt="JS Logo" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12 rounded-full bg-purple-500 p-2 shadow-lg">
              <img src="${viteLogo}" alt="Vite Logo" />
            </div>
          </div>
        </div>
      </div>
      
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Get started</h1>
        <p class="py-6 text-base-content/70">
          Edit <code class="badge badge-secondary py-3">src/main.js</code> and save to test <strong>HMR</strong>
        </p>
        <button id="counter" type="button" class="btn btn-primary btn-lg shadow-lg"></button>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    
    <div id="docs" class="card bg-base-100 shadow-xl border-t-4 border-accent">
      <div class="card-body">
        <h2 class="card-title flex items-center gap-2">
          <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          Documentation
        </h2>
        <p>Your questions, answered</p>
        <div class="card-actions justify-start mt-4">
          <a href="https://vite.dev/" target="_blank" class="btn btn-outline btn-sm gap-2">
             <img src="${viteLogo}" class="w-4" /> Vite
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="btn btn-outline btn-sm gap-2">
             <img src="${javascriptLogo}" class="w-4" /> JS Docs
          </a>
        </div>
      </div>
    </div>

    <div id="social" class="card bg-base-100 shadow-xl border-t-4 border-primary">
      <div class="card-body">
        <h2 class="card-title flex items-center gap-2">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          Connect with us
        </h2>
        <p>Join the Vite community</p>
        <div class="grid grid-cols-2 gap-2 mt-4">
          <a href="https://github.com/vitejs/vite" target="_blank" class="btn btn-ghost btn-sm justify-start">GitHub</a>
          <a href="https://chat.vite.dev/" target="_blank" class="btn btn-ghost btn-sm justify-start">Discord</a>
          <a href="https://x.com/vite_js" target="_blank" class="btn btn-ghost btn-sm justify-start">X.com</a>
          <a href="https://bsky.app/profile/vite.dev" target="_blank" class="btn btn-ghost btn-sm justify-start">Bluesky</a>
        </div>
      </div>
    </div>

  </section>

  <footer class="mt-20 text-center text-base-content/30 italic">
    Build with DaisyUI & Vite
  </footer>
</div>
`

setupCounter(document.querySelector('#counter'))