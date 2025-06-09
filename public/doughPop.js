const donutImg = document.querySelector("#center-image");
const flavorImg = document.querySelector(".flavor-img")
const orbit = document.getElementById("orbit-words");
const sideBarText = document.querySelector(".sideBarText");
const sideBarHeader = document.querySelector(".sideBarHeader");
const sideBarPrice = document.querySelector(".sideBarPrice")
const radius = 300;
let angleOffset = 0;

// words circle animation
const flavorMap = {
    Matcha: {
        name: "Matcha",
        price: "3.5€",
        color: "#B5BAA4",
        donut: "./images/matchadonut.png",
        flavor: "./images/matcha.png",
        content: "Experience serene sophistication with our Matcha Donuts. Crafted using premium Japanese matcha powder, these delicate treats feature a subtly earthy flavor paired with a sweet green tea glaze. The light, airy texture melts in your mouth, while a dusting of matcha powder adds an elegant finish. "
    },
    Strawberry: {
        name: "Strawberry",
        price: "3.5€",
        color: "#D57178",
        donut: "./images/strowberrydonut.png",
        flavor: "./images/strawberry.png",
        content: "Indulge in a burst of fruity delight with our Strawberry Donuts!  Soft, fluffy dough infused with real strawberry puree, crowned with a vibrant pink glaze and sprinkled with freeze-dried strawberry bits.  Each bite balances sweet and tangy notes, offering a refreshing twist on a classic treat. "
    },
    Choco: {
        name: "Chocolate",
        price: "3.5€",
        color: "#532610",
        donut: "./images/chocodonut.png",
        flavor: "./images/chocolate.png",
        content: "Chocoholics rejoice! Our Chocolate Donuts are a decadent dream, blending rich cocoa-infused dough with a velvety chocolate glaze. Topped with crunchy chocolate pearls or rainbow sprinkles, they deliver a satisfying mix of moistness and crunch. Perfectly sweet without overwhelming, Vegan options available. Dive into pure chocolate bliss!"
    },
    Classic: {
        name: "Classic",
        price: "3.5€",
        color: "#F5E6D0",
        donut: "./images/sugerdonut.png",
        flavor: "./images/suger.png",
        content: "Timeless simplicity at its finest. Our Classic Donuts feature a golden, pillowy base with a crisp exterior, lightly coated in a glossy vanilla glaze or rolled in cinnamon sugar. Light, airy, and irresistibly fluffy, they’re a nostalgic nod to tradition. Pair with coffee for breakfast or enjoy solo as an afternoon pick-me-up. Uncomplicated, comforting, and always satisfying."
    },
    Cookie: {
        name: "Cookie",
        price: "3.5€",
        color: "#532610",
        donut: "./images/oreodonut.png",
        flavor: "./images/oreo.png",
        content: "Crunchy, creamy, and utterly irresistible! Oreo Donuts combine cookies-and-cream magic into every bite. Studded with Oreo pieces in the dough and topped with a silky white glaze, crushed Oreo crumbs, and a mini cookie garnish. The contrast of tender donut and crisp cookie creates a textural symphony. "
    },
};

const words = Object.keys(flavorMap);
const wordElements = words.map((word, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.innerText = word;
    orbit.appendChild(span);

    // Add click handler
    span.addEventListener("click", () => {
        donutImg.src = flavorMap[word].donut;
        flavorImg.src = flavorMap[word].flavor;
        sideBarText.innerHTML = flavorMap[word].content;
        sideBarPrice.innerHTML = flavorMap[word].price;
        sideBarPrice.style.color = flavorMap[word].color;
        sideBarHeader.innerHTML = flavorMap[word].name;
        sideBarHeader.style.color = flavorMap[word].color;
    });

    return span;
});

function animate() {
    const step = (2 * Math.PI) / words.length;

    wordElements.forEach((el, i) => {
        const angle = i * step + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        el.style.left = `${x + 450}px`; // +100px to account for image width/2
        el.style.top = `${y + 200}px`;  // +100px to account for image height/2
        el.style.transform = `translate(-50%, -50%)`;
        el.style.fontSize = "2em"
    });

    angleOffset += 0.003;
    requestAnimationFrame(animate);
}

animate();

