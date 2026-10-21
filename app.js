// SloDoCo sample site. Data comes straight from slodoco.com (Oct 2026).
const SHOPS = [
  { id: "foothill", name: "SLO Foothill", phone: "(805) 782-9766", address: "793 E. Foothill Blvd., Ste. F", city: "San Luis Obispo, CA 93405",
    hours: "24/7", open: null, close: null, orders: "sloorders@slodoco.com" },
  { id: "higuera", name: "SLO Higuera", phone: "(805) 439-1062", address: "195 Higuera Street", city: "San Luis Obispo, CA 93401",
    hours: "5 AM – 12 AM", open: 5, close: 24, orders: "hisloorders@slodoco.com" },
  { id: "paso", name: "Paso Robles", phone: "(805) 226-5058", address: "2110 Spring Street", city: "Paso Robles, CA 93446",
    hours: "5 AM – 9 PM", open: 5, close: 21, orders: "pasobusiness@slodoco.com" },
  { id: "goleta", name: "Goleta", phone: "(805) 770-3060", address: "290 Storke Road, Ste. A", city: "Goleta, CA 93117",
    hours: "24/7", open: null, close: null, orders: "goletaorders@slodoco.com" },
];

const SPECIALS = [
  { name: "Web Weaver", tag: "Gluten-free & vegan", img: "Gluten-Free-Web-Weaver.webp", out: "7 AM", price: "$4.10",
    text: "Chocolate chocolate-chip cake dipped in pumpkin icing, topped with an Oreo spider." },
  { name: "Boo Bar", img: "Boo-Bars.webp", out: "9 AM", price: "$3.50",
    text: "A chocolate bar topped with whipped cream ghosts and candy pumpkins." },
  { name: "The Itsy Bitsy Crunch", img: "Itsy-Bitsy-Crunch.webp", out: "9 AM", price: "$3.00",
    text: "Devil's food cake, chocolate icing and sprinkles, icing eyeballs and pretzel legs." },
  { name: "Pumpkin Brûlée Bites", img: "Pumpkin-Brulee-Bites.webp", out: "10 AM", price: "75¢ each, $8.10 a dozen",
    text: "Caramelized donut holes filled with pumpkin pie filling." },
  { name: "Coraline Raised", img: "Coraline-Raised.webp", out: "10 AM", price: "$3.80",
    text: "Marshmallow with candy buttons, or strawberry piped like the cake from Coraline." },
  { name: "The Boo Bucket", img: "The-Boo-Bucket.webp", out: "10 AM", price: "$4.00",
    text: "Vanilla raised, whipped cream and candy, with a black licorice handle." },
  { name: "Caramel Apple Oogie Boogie", img: "Carmel-Apple-Oogie-Boogie.webp", out: "11 AM", price: "$4.00",
    text: "Green apple icing, caramel mousse filling, piped stitches and gummy worms." },
  { name: "Chocolate Ghostface", img: "Chocolate-Ghostface.webp", out: "11 AM", price: "$4.00",
    text: "Chocolate-dipped raised donut piped like Ghostface, filled with chocolate dobash." },
  { name: "Monster Mash Cakes", img: "Monster-Mash-Cakes.webp", out: "11 AM", price: "$2.95",
    text: "Cake donuts in colored vanilla, piped into a cast of little monsters." },
  { name: "Vintage Carnival Creeps", img: "The-Vintage-Carnival-Creeps.webp", out: "11 AM", price: "$3.80",
    text: "Black chocolate or orange pumpkin icing, piped like creepy vintage Halloween." },
];

const MENU = [{"name":"Buttermilk","items":[{"name":"Plain","img":"Buttermilk_Plain.webp"},{"name":"Chocolate","img":"Buttermilk_Chocolate.webp"},{"name":"Glazed","img":"Buttermilk_Glazed.webp"},{"name":"Maple","img":"Buttermilk_Maple.webp"}]},{"name":"Old Fashioned","items":[{"name":"Plain","img":"OldFashioned_Plain.webp"},{"name":"Chocolate","img":"OldFashioned_Chocolate.webp"},{"name":"Glazed","img":"OldFashioned_Glazed.webp"},{"name":"Maple","img":"OldFashioned_Maple.webp"}]},{"name":"Cake","items":[{"name":"Plain","img":"Cake_Plain.webp"},{"name":"Cinnamon Sugar","img":"Cake_CinnamonSugar.webp"},{"name":"Chocolate","img":"Cake_Chocolate.webp"},{"name":"Maple","img":"Cake_Maple.webp"},{"name":"Chocolate Sprinkle","img":"Cake_ChocolateSprinkle.webp"},{"name":"Maple Sprinkle","img":"Cake_MapleSprinkle.webp"},{"name":"Chocolate Chocolate Chip","img":"Cake_ChocolateChocolateChip.webp"},{"name":"Maple Chocolate Chip","img":"Cake_MapleChocolateChip.webp"},{"name":"Chocolate Peanut","img":"Cake_ChocolatePeanut.webp"},{"name":"Maple Peanut","img":"Cake_MaplePeanut.webp"},{"name":"Chocolate Coconut","img":"Cake_ChocolateCoconut.webp"},{"name":"Maple Coconut","img":"Cake_MapleCoconut.webp"},{"name":"Powdered Sugar","img":"Cake_PowderedSugar.webp"},{"name":"Crumb","img":"Cake_Crumb.webp"},{"name":"Strawberry","img":"Cake_Strawberry.webp"},{"name":"Vanilla","img":"Cake_Vanilla.webp"},{"name":"Strawberry Sprinkle","img":"Cake_StrawberrySprinkle.webp"},{"name":"Vanilla Sprinkle","img":"Cake_VanillaSprinkle.webp"},{"name":"Strawberry Chocolate Chip","img":"Cake_StrawberryChocolateChip.webp"},{"name":"Vanilla Chocolate Chip","img":"Cake_VanillaChocolateChip.webp"},{"name":"Strawberry Peanut","img":"Cake_StrawberryPeanut.webp"},{"name":"Vanilla Peanut","img":"Cake_VanillaPeanut.webp"},{"name":"Strawberry Coconut","img":"Cake_StrawberryCoconut.webp"},{"name":"Vanilla Coconut","img":"Cake_VanillaCoconut.webp"}]},{"name":"Devil's Food Cake","items":[{"name":"Chocolate","img":"DevilsFood_Chocolate.webp"},{"name":"Chocolate Sprinkle","img":"DevilsFood_ChocolateSprinkle.webp"},{"name":"Chocolate Coconut","img":"DevilsFood_ChocolateCoconut.webp"},{"name":"Mint","img":"DevilsFood_Mint.webp"},{"name":"Chocolate Chocolate Chip","img":"DevilsFood_ChocolateChocolateChip.webp"},{"name":"Chocolate Peanut","img":"DevilsFood_ChocolatePeanut.webp"},{"name":"Mint Chocolate Chip","img":"DevilsFood_MintChocolateChip.webp"}]},{"name":"Raised","items":[{"name":"Chocolate","img":"Raised_Chocolate.webp"},{"name":"Glazed","img":"Raised_Glazed.webp"},{"name":"Crumb","img":"Raised_Crumb.webp"},{"name":"Coconut","img":"Raised_Coconut.webp"},{"name":"Strawberry Sprinkle","img":"Raised_StrawberrySprinkle.webp"},{"name":"Vanilla Sprinkle","img":"Raised_VanillaSprinkle.webp"},{"name":"Marshmallow Galaxy","img":"Raised_MarshmallowGalaxy.webp"},{"name":"Maple","img":"Raised_Maple.webp"},{"name":"Sugar","img":"Raised_Sugar.webp"},{"name":"Lavender","img":"Raised_Lavender.webp"},{"name":"Chocolate Sprinkle","img":"Raised_ChocolateSprinkle.webp"},{"name":"Circus Animal","img":"Raised_CircusAnimal.webp"},{"name":"Snickerdoodle","img":"Snickerdoodledonut.webp"}]},{"name":"Filled","items":[{"name":"Vienna Cream","img":"Filled_ViennaCream.webp"},{"name":"Lemon Jelly","img":"Filled_LemonCream.webp"},{"name":"Crème Brûlée","img":"Filled_CremeBrulee.webp"},{"name":"Raspberry Jelly","img":"Filled_Raspberry.webp"},{"name":"Espresso Cream","img":"Filled_Espresso.webp"}]},{"name":"Bars & Twists","items":[{"name":"Chocolate","img":"Bar_Chocolate.webp"},{"name":"Maple","img":"Bar_Maple.webp"},{"name":"Chocolate","img":"Twist_Chocolate.webp"},{"name":"Cinnamon","img":"Bar_Cinnamon.webp"},{"name":"Maple Bacon","img":"Bar_MapleBacon.webp"},{"name":"Glazed","img":"Twist_Glazed.webp"},{"name":"Sugar","img":"Twist_Sugar.webp"}]},{"name":"Pillows & Bear Claws","items":[{"name":"Chocolate Chocolate Chip","img":"Pillow_ChocolateChocolateChip.webp"},{"name":"Maple Chocolate Chip","img":"Pillow_Maple.webp"},{"name":"Strawberry Cream Cheese","img":"Pillow_StrawberryCreamCheese.webp"},{"name":"Boysenberry Cream Cheese","img":"Pillow_BoysenberryCreamCheese.webp"},{"name":"Chai Cream Cheese","img":"Pillow_ChaiCreamCheese.webp"},{"name":"Peanut Butter","img":"Pillow_PeanutButter.webp"},{"name":"Crumb Bear Claw","img":"BearClaw_Crumb.webp"},{"name":"Nutella","img":"Pillow_Nutella.webp"},{"name":"Peanut Butter & Jelly","img":"Pillow_PeanutButterJelly.webp"},{"name":"Pumpkin Pie","img":"Pillow_PumpkinPie.webp"},{"name":"Cream Cheese","img":"Pillow_CreamCheese.webp"},{"name":"Milk & Cookies","img":"Pillow_MilkAndCookies.webp"},{"name":"Bear Claw","img":"BearClaw_Glazed.webp"}]},{"name":"Cinnamon Rolls & Fritters","items":[{"name":"Cinnamon Roll","img":"Roll_Glazed.webp"},{"name":"Crumb Cinnamon Roll","img":"Roll_Crumb.webp"},{"name":"Apple Fritter","img":"Fritter_Apple.webp"}]},{"name":"Croissants","items":[{"name":"Plain","img":"Croissant_Plain.webp"},{"name":"Ham & Cheese","img":"hamandcheese.webp"},{"name":"Strawberry Cream Cheese","img":"strawberrycroissant.webp"},{"name":"Jalapeno Ham & Cheese","img":"jalapenohamandcheese.webp"},{"name":"Chocolate","img":"Chocolatecroissant.webp"}]},{"name":"Gluten Free","items":[{"name":"Chocolate (gf)","img":"GlutenFreeChocolateDonut.webp"},{"name":"Lavender (gf)","img":"GlutenFreeLavenderDonut.webp"},{"name":"Vanilla (gf)","img":"GlutenFreeVanillaDonut.webp"},{"name":"Maple (gf)","img":"GlutenFreeMapleDonut.webp"}]}];

const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- live shop board (Pacific time, wherever the visitor is)
function pacificNow() {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", minute: "numeric",
    hourCycle: "h23", weekday: "long" }).formatToParts(new Date());
  const get = t => p.find(x => x.type === t).value;
  return { h: +get("hour"), m: +get("minute"), day: get("weekday") };
}
const fmtHour = h => (h % 24 === 0 ? "midnight" : `${h % 12 || 12} ${h % 24 < 12 ? "AM" : "PM"}`);

function status(shop, now) {
  if (shop.open === null) return { open: true, line: "Open 24/7", sub: "Always frying" };
  const t = now.h + now.m / 60;
  if (t >= shop.open && t < shop.close) {
    const left = shop.close - t;
    return { open: true, line: "Open now", sub: left <= 1 ? `Closing soon, at ${fmtHour(shop.close)}` : `Until ${fmtHour(shop.close)}` };
  }
  return { open: false, line: "Closed", sub: `Opens at ${fmtHour(shop.open)}` };
}

const mapLink = s => "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(`SloDoCo ${s.address}, ${s.city}`);
const tel = s => "tel:+1" + s.phone.replace(/\D/g, "");

function renderBoard() {
  const now = pacificNow();
  const time = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", minute: "2-digit" }).format(new Date());
  $("#clock").textContent = `It's ${time} on ${now.day} on the Central Coast.`;
  const open = SHOPS.filter(s => status(s, now).open).map(s => s.name);
  $("#now").innerHTML = `<b>Open right now:</b> ${esc(open.join(", "))}`;
  $("#board").innerHTML = SHOPS.map(s => {
    const st = status(s, now);
    return `<li class="shop ${st.open ? "is-open" : "is-closed"}">
      <div class="shop-top">
        <h3>${esc(s.name)}</h3>
        <span class="badge">${st.line}</span>
      </div>
      <p class="sub">${esc(st.sub)}</p>
      <p class="addr">${esc(s.address)}<br>${esc(s.city)}</p>
      <div class="shop-links">
        <a class="btn btn-sm" href="${mapLink(s)}" target="_blank" rel="noopener">Directions</a>
        <a class="phone" href="${tel(s)}">${esc(s.phone)}</a>
      </div>
    </li>`;
  }).join("");
}

// ---------- specials
function renderSpecials() {
  $("#specials-list").innerHTML = SPECIALS.map(s => `<li class="item">
    <figure><img src="img/${s.img}" alt="${esc(s.name)} donut" loading="lazy"></figure>
    <h3>${esc(s.name)}</h3>
    ${s.tag ? `<p class="tag">${esc(s.tag)}</p>` : ""}
    <p class="desc">${esc(s.text)}</p>
    <p class="meta"><strong>${esc(s.price)}</strong><span>Out by ${s.out}</span></p>
  </li>`).join("");
}

// ---------- social grid (sample tiles; the live site swaps in a real Instagram feed)
const FEED = [
  ["slodocoicon.webp", "Four frosted donuts stacked next to a SLODOCO cup"],
  ["IMG_6964.webp", "A hand buried in rainbow sprinkles"],
  ["Raised_MarshmallowGalaxy.webp", "The marshmallow galaxy raised donut"],
  ["Chocolate-Ghostface.webp", "The Chocolate Ghostface October special"],
  ["CGL005.webp", "A wedding donut tower next to the cake"],
  ["31326641_183673375792805_2178620155146272768_n.webp", "The crew outside the Foothill shop"],
];
function renderFeed() {
  $("#feed").innerHTML = FEED.map(([img, alt]) => `<li><a href="https://www.instagram.com/slodoco/" target="_blank" rel="noopener">
    <img src="img/${img}" alt="${esc(alt)}" loading="lazy"></a></li>`).join("");
}

// ---------- menu case
let activeCat = "All", expanded = false;
const PREVIEW = 12;
function renderChips() {
  const cats = ["All", ...MENU.map(c => c.name)];
  $("#chips").innerHTML = cats.map(c =>
    `<button type="button" class="tab" aria-pressed="${c === activeCat}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
}
function renderCase() {
  const q = $("#q").value.trim().toLowerCase();
  const items = [];
  for (const c of MENU) {
    if (activeCat !== "All" && c.name !== activeCat) continue;
    for (const it of c.items) {
      const label = `${it.name} ${c.name}`.toLowerCase();
      if (q && !q.split(/\s+/).every(w => label.includes(w))) continue;
      items.push({ ...it, cat: c.name });
    }
  }
  $("#count").textContent = items.length
    ? `${items.length} ${items.length === 1 ? "donut" : "donuts"}${activeCat !== "All" ? " in " + activeCat : ""}${q ? ` matching “${$("#q").value.trim()}”` : ""}`
    : `Nothing matches “${$("#q").value.trim()}”. Try a flavor like maple, chocolate or lavender.`;
  // The full case is long: start with a few rows unless they've filtered or searched.
  const collapsible = activeCat === "All" && !q && items.length > PREVIEW;
  const shown = collapsible && !expanded ? items.slice(0, PREVIEW) : items;
  $("#more-row").hidden = !collapsible;
  $("#more").innerHTML = `${expanded ? "Show fewer" : `Show all ${items.length} donuts`}<svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3.5 6l4.5 4.5L12.5 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  $("#more").setAttribute("aria-expanded", String(expanded));
  $("#case").innerHTML = shown.map(it => `<li class="donut">
    ${it.img ? `<img src="img/${it.img}" alt="" loading="lazy" width="210" height="175">` : `<span class="noimg" aria-hidden="true"></span>`}
    <span class="d-name">${esc(it.name)}</span>
    <span class="d-cat">${esc(it.cat)}</span>
  </li>`).join("");
}

// ---------- forms (demo: show where it would go instead of sending)
function fillShopSelects() {
  const opts = SHOPS.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join("");
  $("#o-shop").innerHTML = opts;
  document.querySelectorAll(".shop-select").forEach(el => (el.innerHTML = opts));
}
function minOrderDate() {
  const d = new Date(Date.now() + 72 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}
function wireForms() {
  const date = $("#o-date");
  date.min = minOrderDate();
  date.value = date.min;
  document.querySelectorAll("form[data-kind]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const msg = f.querySelector(".form-msg");
    const bad = [...f.querySelectorAll("[required]")].find(el => !el.checkValidity());
    if (bad) {
      const name = f.querySelector(`label[for="${bad.id}"]`)?.textContent || "This field";
      msg.textContent = date === bad && bad.value && bad.value < bad.min
        ? `Pick a date on or after ${new Date(bad.min + "T12:00").toLocaleDateString("en-US", { month: "long", day: "numeric" })}. Custom orders need 72 hours.`
        : `${name} is missing or doesn't look right.`;
      msg.className = "form-msg is-error";
      bad.focus();
      return;
    }
    let to = "business@slodoco.com";
    if (f.id === "order-form") to = SHOPS.find(s => s.id === $("#o-shop").value).orders;
    msg.className = "form-msg is-ok";
    msg.textContent = f.classList.contains("kit-form")
      ? "You're on the list. In the live site this joins the kit store's email list, and you hear first when it launches."
      : `${f.dataset.kind} sent. In the live site this goes straight to ${to}, and they'll reply by email.`;
    f.reset();
    if (f.id === "order-form") date.value = date.min;
  }));
  // "Start a wedding order" preselects the occasion
  document.querySelectorAll("[data-occasion]").forEach(a => a.addEventListener("click", () => {
    $("#o-occasion").value = a.dataset.occasion;
  }));
}

// ---------- footer + nav
function renderFoot() {
  $("#foot-shops").innerHTML = SHOPS.map(s =>
    `<li><strong>${esc(s.name)}</strong><span>${esc(s.hours)}</span><span>${esc(s.address)}</span><a href="${tel(s)}">${esc(s.phone)}</a></li>`).join("");
}
function wireNav() {
  const btn = $(".menu-btn"), nav = $("#nav");
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
  // Once the big logo scrolls away, the sticky bar shows the small seal and the order button.
  new IntersectionObserver(([e]) => $("#bar").classList.toggle("is-stuck", !e.isIntersecting)).observe($(".top"));
}
// Fade the filter row's edge only when there's more to scroll to.
function wireTabsFade() {
  const sc = $(".tabs-scroll");
  const update = () => {
    sc.classList.toggle("fade-l", sc.scrollLeft > 4);
    sc.classList.toggle("fade-r", sc.scrollLeft + sc.clientWidth < sc.scrollWidth - 4);
  };
  sc.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
}

renderBoard(); setInterval(renderBoard, 30000);
renderSpecials(); renderFeed();
renderChips(); renderCase();
$("#chips").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  activeCat = b.dataset.cat; renderChips(); renderCase();
});
$("#q").addEventListener("input", renderCase);
$("#more").addEventListener("click", () => {
  expanded = !expanded;
  renderCase();
  // Collapsing from the bottom of a long list: bring the menu back into view.
  if (!expanded) $("#menu").scrollIntoView({ block: "start" });
});
fillShopSelects(); wireForms(); renderFoot(); wireNav(); wireTabsFade();
