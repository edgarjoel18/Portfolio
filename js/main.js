const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const zoobleDoc = document.getElementById("zooble-doc");
const zoobleCode = document.getElementById("zooble-code");
const zoobleApp = document.getElementById("zooble-app");

const edbDoc = document.getElementById("edb-doc");
const edbCode = document.getElementById("edb-code");

const ticketPalCode = document.getElementById("ticket-pal-code");
const ticketPalApp = document.getElementById("ticket-pal-app");

const onlineEditorCode = document.getElementById("code-editor-code");
const onlineEditorApp = document.getElementById("code-editor-app");

const feedyApp = document.getElementById("feedy-app");

// Zooble events
zoobleDoc.addEventListener("click", () => {
  window.open(
    "https://github.com/edgarjoel18/Zooble-App/tree/development/Milestones"
  );
});

zoobleCode.addEventListener("click", () => {
  window.open(
    "https://github.com/edgarjoel18/Zooble-App/tree/development/application"
  );
});

zoobleApp.addEventListener("click", () => {
  window.open("https://zoou.app/");
});

// edb events
edbDoc.addEventListener("click", () => {
  window.open(
    "https://github.com/edgarjoel18/EDB-Hospital-management-database/blob/master/milestones/Milestone2/M2.pdf"
  );
});

edbCode.addEventListener("click", () => {
  window.open(
    "https://github.com/edgarjoel18/EDB-Hospital-management-database/tree/master/milestones/Milestone3"
  );
});

// ticket pal events
onlineEditorCode.addEventListener("click", () => {
  window.open("https://github.com/edgarjoel18/online-code-editor");
});

onlineEditorApp.addEventListener("click", () => {
  window.open("https://code-editor-nu.vercel.app/");
});

feedyApp.addEventListener("click", () => {
  window.open("https://blooming-sierra-79420.herokuapp.com/");
});
