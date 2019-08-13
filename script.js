const newHeaderImage = "https://knowledge.autodesk.com/sites/default/files/product-logo/AKN_Forums_ProductLogos_Fusion_360_2018.png"
const headerLogo = document.querySelector(".autodesk-brand-logo")
const headerText = document.createElement("span")
const blackBanner = document.querySelector(".navbar-inner")
const headerLink = headerLogo.querySelector("a")
const headerImage = headerLogo.querySelector("img")

// Remove Black banner
blackBanner.style = "display:none;"

// Change header logo
headerText.innerHTML = 	"Fusion 360 Forum"
headerLink.setAttribute("href", "https://forums.autodesk.com/t5/fusion-360/ct-p/1234")
headerLink.appendChild(headerText)

headerImage.setAttribute("src", newHeaderImage)
headerImage.style = `height: 30px;`
headerText.style = `display: inline-block; margin-left: 6px;`
headerLink.style = `text-decoration: none; color:#333; font-size:21px; font-weight: bold;`
