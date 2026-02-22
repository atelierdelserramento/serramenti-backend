// src/catalog.ts

export type Product = {
  id: string;
  label: string;
  category: "Finestre" | "Porte";
  material: "alluminio" | "pvc" | string;
  variant?: string;
  imageUrl: string;
};

const BASE =
  "https://storage.googleapis.com/serramenti-vision-assets/Materiale";

const gcs = (path: string) => `${BASE}/${path}`;

export const PRODUCTS: Product[] = [
  // =========================
  // ARROGANCE
  // =========================
  {
    id: "arrogance_aperta",
    label: "Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: gcs("Finestre/Arrogance-aperta.png"),
  },
  {
    id: "arrogance_chiusa",
    label: "Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: gcs("Finestre/Arrogance-chiusa.png"),
  },

  // =========================
  // EPIQ PVC
  // =========================
  {
    id: "epiq_pvc_aperta",
    label: "Epiq PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: gcs("Finestre/Epiq-PVC-aperta.png"),
  },
  {
    id: "epiq_pvc_chiusa",
    label: "Epiq PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: gcs("Finestre/Epiq-PVC-chiusa.png"),
  },

  // =========================
  // PVC
  // =========================
  {
    id: "pvc_aperta",
    label: "PVC (aperta)",
    category: "Finestre",
    material: "pvc",
    imageUrl: gcs("Finestre/PVC-aperta.png"),
  },
  {
    id: "pvc_chiusa",
    label: "PVC (chiusa)",
    category: "Finestre",
    material: "pvc",
    imageUrl: gcs("Finestre/PVC-chiusa.png"),
  },

  // =========================
  // PANORAMA
  // =========================
  {
    id: "panorama",
    label: "Panorama",
    category: "Finestre",
    material: "alluminio",
    imageUrl: gcs("Finestre/Panorama.png"),
  },

  // =========================
  // SCORREVOLE ARROGANCE
  // =========================
  {
    id: "scorrevole_arrogance_aperta",
    label: "Scorrevole Arrogance (aperta)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: gcs("Finestre/Scorrevole-Arrogance-aperta.png"),
  },
  {
    id: "scorrevole_arrogance_chiusa",
    label: "Scorrevole Arrogance (chiusa)",
    category: "Finestre",
    material: "alluminio",
    imageUrl: gcs("Finestre/Scorrevole-Arrogance-chiusa.png"),
  },

  // =========================
  // TRASLANTE PVC
  // =========================
  {
    id: "traslante_pvc_aperto",
    label: "Traslante PVC (aperto)",
    category: "Finestre",
    material: "pvc",
    imageUrl: gcs("Finestre/Traslante-PVC-aperto.png"),
  }
];
