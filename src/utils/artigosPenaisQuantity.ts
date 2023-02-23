// divide o "quantidade" pela "minQuantity"
// quantidade / minQuantity

// TESTAR value={`${artigo.time / artigo.minQuantity} | ${artigo.trafficTicket  / artigo.minQuantity} | ${artigo.bail  / artigo.minQuantity}`}

const artigosPenaisQuantity = [
  {
    article: "Art. 67",
    name: "Contrabando de materiais restritos",
    time: 0.28,
    trafficTicket: 285.71,
    bail: 857.14,
    note: "A cada 35",
    color: "#E06666",
    minQuantity: 35,
  },
  {
    article: "Art. 68.1",
    name: "Maconha",
    time: 0.5,
    trafficTicket: 500,
    bail: 1500,
    note: "A cada 10",
    color: "#E06666",
    minQuantity: 10,
  },
  {
    article: "Art. 68.2",
    name: "Cocaína",
    time: 0.5,
    trafficTicket: 500,
    bail: 1500,
    note: "A cada 10",
    color: "#E06666",
    minQuantity: 10,
  },
  {
    article: "Art. 68.3",
    name: "Metanfetamina",
    time: 0.5,
    trafficTicket: 500,
    bail: 1500,
    note: "A cada 10",
    color: "#E06666",
    minQuantity: 10,
  },
  {
    article: "Art. 68.4",
    name: "LSD",
    time: 0.5,
    trafficTicket: 500,
    bail: 1500,
    note: "A cada 10",
    color: "#E06666",
    minQuantity: 10,
  },
  {
    article: "Art. 69",
    name: "Dinheiro sujo",
    time: 0.0005,
    trafficTicket: 0.5,
    bail: 1.5,
    note: "A cada 10000",
    color: "#E06666",
    minQuantity: 10000,
  },
  {
    article: "Art. 70",
    name: "Lockpick / Algema / Capuz / C4 / Pendrive / Keycard / Colete",
    time: 15,
    trafficTicket: 15000,
    bail: 45000,
    note: "A cada 1",
    color: "#E06666",
    minQuantity: 1,
  },
  {
    article: "Art. 72",
    name: "Porte de munição sem registro",
    time: 1,
    trafficTicket: 1000,
    bail: 3000,
    note: "A cada 35",
    color: "#E06666",
    minQuantity: 35,
  },
];

export default artigosPenaisQuantity;
