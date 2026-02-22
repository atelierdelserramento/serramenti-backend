import React, { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "./catalog";

type Props = {
  value?: string; // productId selezionato
  onChange: (productId: string) => void;
};

export default function ProductSelector({ value, onChange }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"Tutti" | Product["category"]>("Tutti");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.label.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCategory = category === "Tutti" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Toolbar */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca prodotto (nome, materiale, categoria)..."
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.25)",
            color: "white",
            minWidth: 260,
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as any)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.25)",
            color: "white",
          }}
        >
          <option value="Tutti">Tutti</option>
          <option value="Finestre">Finestre</option>
          <option value="Porte">Porte</option>
        </select>

        <div style={{ opacity: 0.8, fontSize: 12 }}>
          {filtered.length} prodotti
        </div>
      </div>

      {/* Grid cliccabile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 12,
        }}
      >
        {filtered.map((p) => {
          const selected = p.id === value;
          return (
            <button
              key={p.id}
              onClick={() => onChange(p.id)}
              style={{
                textAlign: "left",
                borderRadius: 14,
                border: selected
                  ? "2px solid rgba(255,255,255,0.9)"
                  : "1px solid rgba(255,255,255,0.15)",
                background: selected ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.25)",
                padding: 10,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.06)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={p.imageUrl}
                  alt={p.label}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <div style={{ marginTop: 8, color: "white", fontWeight: 650, fontSize: 13 }}>
                {p.label}
              </div>
              <div style={{ marginTop: 2, color: "rgba(255,255,255,0.65)", fontSize: 12 }}>
                {p.category} · {p.material}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
