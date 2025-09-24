export function normalizeText(text: string) {
  return text
    .normalize("NFD")                  // rozdělí písmena a diakritiku
    .replace(/[\u0300-\u036f]/g, "")   // smaže diakritiku
    .toLowerCase();                    // sjednotí na lowercase
}