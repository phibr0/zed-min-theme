const readJson = async (path) => JSON.parse(await Bun.file(path).text());

const [base, dark, light] = await Promise.all([
  readJson("./themes/base.json"),
  readJson("./themes/dark.json"),
  readJson("./themes/light.json"),
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

await Bun.write("./min-theme.json", JSON.stringify(base, null, 2));

console.log("Themes built successfully!");
