import{_ as e,o as a,c as o,a as t}from"./app.dffdee30.js";const m=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"检查您的设备是否被支持","slug":"检查您的设备是否被支持","link":"#检查您的设备是否被支持","children":[]},{"level":2,"title":"找到合适的 boot.img","slug":"找到合适的-boot-img","link":"#找到合适的-boot-img","children":[]},{"level":2,"title":"将 boot.img 刷入设备","slug":"将-boot-img-刷入设备","link":"#将-boot-img-刷入设备","children":[]},{"level":2,"title":"重启","slug":"重启","link":"#重启","children":[]}],"relativePath":"zh_CN/guide/installation.md"}'),s={name:"zh_CN/guide/installation.md"},l=t(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h1><h2 id="检查您的设备是否被支持" tabindex="-1">检查您的设备是否被支持 <a class="header-anchor" href="#检查您的设备是否被支持" aria-hidden="true">#</a></h2><p>从 <a href="https://github.com/tiann/KernelSU/releases" target="_blank" rel="noreferrer">GitHub Releases</a> 或 <a href="https://github.com/tiann/KernelSU/actions/workflows/build-manager.yml" target="_blank" rel="noreferrer">GitHub Actions</a> 下载 KernelSU 管理器应用，然后将应用程序安装到设备并打开：</p><ul><li>如果应用程序显示 “不支持”，则表示您的设备不支持 KernelSU，你需要自己编译设备的内核才能使用，KernelSU 官方不会也永远不会为你提供一个可以刷写的 boot 镜像。</li><li>如果应用程序显示 “未安装”，那么 KernelSU 支持您的设备。</li></ul><h2 id="找到合适的-boot-img" tabindex="-1">找到合适的 boot.img <a class="header-anchor" href="#找到合适的-boot-img" aria-hidden="true">#</a></h2><p>KernelSU 为 GKI 设备提供了通用的 boot.img，您应该将 boot.img 刷写到设备的引导分区。</p><p>您可以从 <a href="https://github.com/tiann/KernelSU/actions/workflows/build-kernel.yml" target="_blank" rel="noreferrer">GitHub Actions for Kernel</a> 下载 boot.img, 请注意您应该使用正确版本的 boot.img. 例如，如果您的设备显示内核是 <code>5.10.101</code>, 需要下载 <code>5.10.101-xxxx.boot.xxx</code>.</p><p>另外，请检查您原有 boot.img 的内核压缩格式，您应该使用正确的格式，例如 <code>lz4</code>、<code>gz</code>。</p><h2 id="将-boot-img-刷入设备" tabindex="-1">将 boot.img 刷入设备 <a class="header-anchor" href="#将-boot-img-刷入设备" aria-hidden="true">#</a></h2><p>使用 <code>adb</code> 连接您的设备，然后执行 <code>adb reboot bootloader</code> 进入 fastboot 模式，然后使用此命令刷入 KernelSU：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">boot.img</span></span>
<span class="line"></span></code></pre></div><h2 id="重启" tabindex="-1">重启 <a class="header-anchor" href="#重启" aria-hidden="true">#</a></h2><p>刷入完成后，您应该重新启动您的设备：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastboot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reboot</span></span>
<span class="line"></span></code></pre></div>`,14),n=[l];function i(r,c,d,p,h,b){return a(),o("div",null,n)}const u=e(s,[["render",i]]);export{m as __pageData,u as default};
