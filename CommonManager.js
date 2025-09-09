class CommonHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =
        `
        <div>
        <ul class="navigation">     
            <li class="navButton"><img class="navLogo" onclick="Home()" src="PowerIcon.png" alt="Home"></li>
            <li class="navButton"><a class="navText" onclick="Home()">Home</a></li>
            <li class="navButton"><a class="navText" onclick="Televisions()">Televisions</a></li>
            <li class="navButton"><a class="navText" onclick="About()">About Us</a></li>
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

function highlight()
{
    const path = x;
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)