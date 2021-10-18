export const update = {
  type: "object",
  properties: {
    email: { type: "string" },
    ID: { type: "string" },
  },
  required: ["email", "ID"],
} as const;

export const save = {
  type: "object",
  properties: {
    email: { type: "string" },
  },
  required: ["email"],
} as const;

export const delete1 = {
  type: "object",
  properties: {
    ID: { type: "string" },
  },
  required: ["ID"],
} as const;

export const allval = {
  type: "object",
  properties: {
    ID: { type: "string" },
  },
} as const;
