const [base, dark, light] = await Promise.all([
  Bun.file("./src/base.json").json(),
  Bun.file("./src/dark.json").json(),
  Bun.file("./src/light.json").json(),
]);

base.themes.push(
  {
    name: "Min Dark (Solid)",
    appearance: "dark",
    style: {
      ...dark,
      background: "#141414",
      "status_bar.background": "#141414",
      "title_bar.background": "#141414",
    },
  },
  {
    name: "Min Dark (Blurred)",
    appearance: "dark",
    style: { ...dark, "background.appearance": "blurred" },
  },
  {
    name: "Min Light (Solid)",
    appearance: "light",
    style: {
      ...light,
      background: "#D0D0D0",
      "status_bar.background": "#D0D0D0",
      "title_bar.background": "#D0D0D0",
    },
  },
  {
    name: "Min Light (Blurred)",
    appearance: "light",
    style: { ...light, "background.appearance": "blurred" },
  },
);

await Bun.write("./themes/min-theme.json", JSON.stringify(base, null, 2));

console.log("Themes built successfully!");
