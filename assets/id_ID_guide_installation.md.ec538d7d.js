import{_ as a,o as e,c as n,a as t}from"./app.dffdee30.js";const c=JSON.parse('{"title":"Instalasi","description":"","frontmatter":{},"headers":[{"level":2,"title":"Periksa apakah perangkat Anda didukung","slug":"periksa-apakah-perangkat-anda-didukung","link":"#periksa-apakah-perangkat-anda-didukung","children":[]},{"level":2,"title":"Temukan boot.img yang tepat","slug":"temukan-boot-img-yang-tepat","link":"#temukan-boot-img-yang-tepat","children":[]},{"level":2,"title":"Flash boot.img ke perangkat","slug":"flash-boot-img-ke-perangkat","link":"#flash-boot-img-ke-perangkat","children":[]},{"level":2,"title":"Reboot","slug":"reboot","link":"#reboot","children":[]}],"relativePath":"id_ID/guide/installation.md"}'),s={name:"id_ID/guide/installation.md"},o=t(`<h1 id="instalasi" tabindex="-1">Instalasi <a class="header-anchor" href="#instalasi" aria-hidden="true">#</a></h1><h2 id="periksa-apakah-perangkat-anda-didukung" tabindex="-1">Periksa apakah perangkat Anda didukung <a class="header-anchor" href="#periksa-apakah-perangkat-anda-didukung" aria-hidden="true">#</a></h2><p>Unduh aplikasi manajer KernelSU dari <a href="https://github.com/tiann/KernelSU/releases" target="_blank" rel="noreferrer">github releases</a> atau <a href="https://github.com/tiann/KernelSU/actions/workflows/build-manager.yml" target="_blank" rel="noreferrer">github actions</a>, lalu instal aplikasi ke perangkat dan buka aplikasi:</p><ul><li>Jika aplikasi menunjukkan <code>Unsupported</code>, itu berarti <strong>Anda harus mengkompilasi kernel sendiri</strong>, KernelSU tidak akan dan tidak pernah menyediakan boot image untuk Anda flash.</li><li>Jika aplikasi menunjukkan <code>Not installed</code>, maka perangkat Anda secara resmi didukung oleh KernelSU.</li></ul><h2 id="temukan-boot-img-yang-tepat" tabindex="-1">Temukan boot.img yang tepat <a class="header-anchor" href="#temukan-boot-img-yang-tepat" aria-hidden="true">#</a></h2><p>KernelSU menyediakan boot.img umum untuk perangkat GKI, Anda harus mem-flash boot.img ke partisi boot perangkat Anda.</p><p>Anda dapat mengunduh boot.img dari [github actions for kernel] (<a href="https://github.com/tiann/KernelSU/actions/workflows/build-kernel.yml" target="_blank" rel="noreferrer">https://github.com/tiann/KernelSU/actions/workflows/build-kernel.yml</a>), perlu diketahui bahwa Anda harus menggunakan versi boot.img yang tepat. Sebagai contoh, jika perangkat Anda menunjukkan bahwa kernelnya adalah <code>5.10.101</code>, maka Anda harus mengunduh <code>5.10.101-xxxx.boot.xxx</code>.</p><p>Dan juga, silakan periksa format boot.img Anda, Anda harus menggunakan format yang tepat, seperti <code>lz4</code>、<code>gz</code>.</p><h2 id="flash-boot-img-ke-perangkat" tabindex="-1">Flash boot.img ke perangkat <a class="header-anchor" href="#flash-boot-img-ke-perangkat" aria-hidden="true">#</a></h2><p>Hubungkan perangkat Anda dengan <code>adb</code> lalu jalankan <code>adb reboot bootloader</code> untuk masuk ke mode fastboot, lalu gunakan perintah ini untuk mem-flash KernelSU:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot.img</span></span>
<span class="line"></span></code></pre></div><h2 id="reboot" tabindex="-1">Reboot <a class="header-anchor" href="#reboot" aria-hidden="true">#</a></h2><p>Ketika di-flash, Anda harus menyalakan ulang perangkat Anda:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reboot</span></span>
<span class="line"></span></code></pre></div>`,14),i=[o];function l(r,d,p,k,u,g){return e(),n("div",null,i)}const m=a(s,[["render",l]]);export{c as __pageData,m as default};
