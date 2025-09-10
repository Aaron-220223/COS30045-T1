class CommonHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =
        `
        <div>
        <ul class="navigation">     
            <li class="navButton"><img class="navLogo" onclick="Home()" src="PowerIcon.png" alt="Home"></li>
            <li class="navButton"><a class="navText" href="/index.html">Home</a></li>
            <li class="navButton"><a class="navText" href="/Televisions.html">Televisions</a></li>
            <li class="navButton"><a class="navText" href="/About_Us.html">About Us</a></li>
        </ul>
        </div>
        `
    }
}

class CommonFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =
        `
        <footer>
        <ul class="footer">
            <li class="footerButton"><p class="footerText">©2025 Aaron Guo Yang CHONG</p></li>
            <li class="footerButton"><p class="footerText">Built with assistance from GenAI for placeholder content</p></li>
        </ul>
        </footer>
        `
    }
}

document.addEventListener('click', e=>{
    const x = e.target.closest('a');
    if(!x) return;
    e.preventDefault();
    window.location.href = x.getAttribute('href');
});

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.navText').forEach(e => {
    const href = e.getAttribute('href');
    if (href === path) {
      e.classList.add('currentHighlight');
    }
  });
});

function Home() 
{
    window.location.href = "/index.html";
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)