const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// footer a class bold;

const link = document.querySelector("footer a");

link.classList.add("bold");

const navs = document.querySelectorAll("nav a");

for(let i = 0; i < navs.length; i++) {
  navs[i].classList.add("italic");
}

const middleimg = document.querySelector("#middle-img");

middleimg.setAttribute("src", "http://localhost:9000/img/accent.png")

const ctaimg = document.querySelector("#cta-img");

ctaimg.setAttribute("src", "http://localhost:9000/img/cta.png");

const header = document.querySelector("header img");

header.setAttribute("src", "http://localhost:9000/img/logo.png");

const ctext = document.querySelector("footer a");

ctext.textContent = "Copyright Great Idea! 2021";

const cinfo = document.querySelector("section.contact h4");

cinfo.textContent = "Contact";

const location = document.querySelector("section.contact p:nth-of-type(1)");

location.textContent = "123 Way 456 Street Somewhere, USA";

const phone = document.querySelector("section.contact p:nth-of-type(2)");

phone.textContent = "1 (888) 888-8888";

const email = document.querySelector("section.contact p:nth-of-type(3)");

email.textContent = "sales@greatidea.io";

const chead1 = document.querySelector(".bottom-content .text-content p:nth-of-type(1)");

chead1.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const chead2 = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");

chead2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const chead3 = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

chead3.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const headc1 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")

const headc2 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")

const headc3 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")

headc1.textContent = "Services";

headc2.textContent = "Product";

headc3.textContent = "Vision";

const thead1 = document.querySelector(".top-content .text-content:nth-of-type(1) h4")

const thead2 = document.querySelector(".top-content .text-content:nth-of-type(2) h4")

thead1.textContent = "Features";
thead2.textContent = "About";

const phead1 = document.querySelector(".top-content .text-content:nth-of-type(1) p");

//HAVING AN ISSUE CREATING ONE OF THE CONST THAT YOU SET OUT.
const phead2 = document.querySelector(".top-content .text-content:nth-of-type(2) p");

phead1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

phead2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const ctah = document.querySelector(".cta .cta-text h1")

const ctab = document.querySelector(".cta .cta-text button")

ctah.textContent = "DOM Is Awesome";

ctab.textContent = "Get Started";

const nav1 = document.querySelector(".container header nav a:nth-of-type(1)")

const nav2 = document.querySelector(".container header nav a:nth-of-type(2)")

const nav3 = document.querySelector(".container header nav a:nth-of-type(3)")

const nav4 = document.querySelector(".container header nav a:nth-of-type(4)")

const nav5 = document.querySelector(".container header nav a:nth-of-type(5)")

const nav6 = document.querySelector(".container header nav a:nth-of-type(6)")

nav1.textContent = "Services";

nav2.textContent = "Product";

nav3.textContent = "Vision";

nav4.textContent = "Features";

nav5.textContent = "About";

nav6.textContent = "Contact";


