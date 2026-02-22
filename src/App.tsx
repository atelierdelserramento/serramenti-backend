import { useState } from "react";
import ProductSelector from "./ProductSelector";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: 40,
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ marginBottom: 30 }}>
        Configuratore Serramenti
      </h1>

      <ProductSelector
        value={selectedProductId}
        onChange={setSelectedProductId}
      />

      {selectedProductId && (
        <div style={{ marginTop: 30 }}>
          <strong>Selezionato:</strong> {selectedProductId}
        </div>
      )}
    </div>
  );
}
