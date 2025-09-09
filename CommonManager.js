class CommonHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =
        `
        <div>
        <ul class="navigation">     
            <li class="navButton"><img class="navLogo" onclick="Home()" src="PowerIcon.png" alt="Home"></li>
            <li class="navButton"><a class="navText" href="/Home.html">Home</a></li>
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
            <li><p class="footerText">2025</p></li>
            <li><p class="footerText">Aaron Guo Yang CHONG</p></li>
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
    window.location.href = "/Home.html";
}

function Televisions() 
{
    window.location.href = "/Televisions.html";
}

function About() 
{
    window.location.href = "/About_Us.html";
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)