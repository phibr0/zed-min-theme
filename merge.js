const [base, dark, light] = await Promise.all([
  Bun.file("./src/base.json").json(),
  Bun.file("./src/dark.json").json(),
  Bun.file("./src/light.json").json(),
]);

base.themes.push(
  {
    name: "Min Dark (Solid)",
    appearance: "dark",
    style: dark,
  },
  {
    name: "Min Dark (Blurred)",
    appearance: "dark",
    style: { ...dark, "background.appearance": "blurred" },
  },
  {
    name: "Min Light (Solid)",
    appearance: "light",
    style: light,
  },
  {
    name: "Min Light (Blurred)",
    appearance: "light",
    style: { ...light, "background.appearance": "blurred" },
  },
);

await Bun.write("./themes/min-theme.json", JSON.stringify(base, null, 2));

console.log("Themes built successfully!");
