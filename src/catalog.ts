// src/catalog.ts
export type Product = {
  id: string;
  label: string;
  category: "Finestre" | "Porte";
  material: "alluminio" | "pvc" | string;
  variant?: string; // es. "01_alluminio_supreme"
  imageUrl: string; // URL pubblico GCS
};

export const PRODUCTS: Product[] = [
  {
    id: "finestre_arrogance_aperta",
    label: "Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-aperta.png",
  },
  {
    id: "finestre_arrogance_chiusa",
    label: "Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl:
      "https://storage.googleapis.com/serramenti-vision-assets/Materiale/Finestre/Arrogance-chiusa.png",
  },
  // ...aggiungi tutti gli altri
];
