const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

logo.src = "img/logo.png";

let title = document.querySelector("title");
title.textContent = "Great Idea! DOM";

let navObj = siteContent["nav"];
let navItems = document.querySelectorAll("nav a");

for (i = 1; i < navItems.length - 1; i++) {
  navItems[i].textContent = navObj["nav-item-" + i.toString(10)];
}

let cta = siteContent["cta"];

let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = cta["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = cta["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";

let mainContentHeader = document.querySelectorAll(".text-content h4");

let mainContentText = document.querySelectorAll(".text-content p");

let mainContentObject = siteContent["main-content"];

let mainContentArr = Object.keys(mainContentObject).filter(item =>
  item.includes("h4")
);

let mainContentTxtArr = Object.keys(mainContentObject).filter(item =>
  item.includes("content")
);

for (i = 0; i < mainContentHeader.length; i++) {
  mainContentHeader[i].textContent = mainContentObject[`${mainContentArr[i]}`];
}

for (i = 0; i < mainContentText.length; i++) {
  mainContentText[i].textContent = mainContentObject[`${mainContentTxtArr[i]}`];
}

let middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

let contactSection = document.querySelector(".contact");

contactSection.firstElementChild.textContent = siteContent.contact["contact-h4"];

contactSection.childNodes[3].innerHTML = "<p>123 Way 456 Street<br>Somewhere,USA</p>";

contactSection.childNodes[5].textContent = siteContent.contact["phone"];

contactSection.childNodes[7].textContent = siteContent.contact["email"];