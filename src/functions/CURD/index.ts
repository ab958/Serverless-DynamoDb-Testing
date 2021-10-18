import { update, save, delete1, allval } from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export const updateVal = {
  handler: `${handlerPath(__dirname)}/handler.UpdateVal`,
  events: [
    {
      http: {
        method: "post",
        path: "updateVal",
        request: {
          schema: {
            "application/json": update,
          },
        },
      },
    },
  ],
};

export const saveData = {
  handler: `${handlerPath(__dirname)}/handler.SaveDate`,
  events: [
    {
      http: {
        method: "post",
        path: "createVal",
        request: {
          schema: {
            "application/json": save,
          },
        },
      },
    },
  ],
};

export const deleteVal = {
  handler: `${handlerPath(__dirname)}/handler.DeleteVal`,
  events: [
    {
      http: {
        method: "delete",
        path: "deleteval",
        request: {
          schema: {
            "application/json": delete1,
          },
        },
      },
    },
  ],
};

export const allVal = {
  handler: `${handlerPath(__dirname)}/handler.getAllVal`,
  events: [
    {
      http: {
        method: "get",
        path: "getallval",
        request: {
          schema: {
            "application/json": allval,
          },
        },
      },
    },
  ],
};
