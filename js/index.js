const el = document.querySelector("nav");
const li = document.querySelectorAll("ul li");

for (const [index, item] of li.entries()) {
  item.style.setProperty("--i", `${index / 30}s`);
}

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: 1 }
);

observer.observe(el);
