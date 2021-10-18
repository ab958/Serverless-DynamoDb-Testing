import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import Dynamo from "../../libs/dynamo";
import { update, save, delete1, allval } from "./schema";

// *********************** UPDATE VALUE ********************************** //

const updateVal: ValidatedEventAPIGatewayProxyEvent<typeof update> = async (
  event
) => {
  let ID = event.body;
  console.log(ID, "eee");
  const newUser = await Dynamo.write(ID, "WahabTable").catch((err) => {
    console.log("error in dynamo write", err);
    return null;
  });

  if (!newUser) {
    return formatJSONResponse({ message: "Failed to get user by ID" });
  }

  return formatJSONResponse({ message: newUser });
};

export const UpdateVal = middyfy(updateVal);

// *********************** SAVE VALUE ********************************** //

const savedata: ValidatedEventAPIGatewayProxyEvent<typeof save> = async (
  event
) => {
  let ID = event.body;
  console.log(ID, "eee");
  const newUser = await Dynamo.write(ID, "WahabTable").catch((err) => {
    console.log("error in dynamo write", err);
    return null;
  });

  if (!newUser) {
    return formatJSONResponse({ message: "Failed to get user by ID" });
  }

  return formatJSONResponse({ message: newUser });
};

export const SaveDate = middyfy(savedata);

// *********************** DELETE VALUE ********************************** //

const deleteVal: ValidatedEventAPIGatewayProxyEvent<typeof delete1> = async (
  event
) => {
  let ID = event.body.ID;
  console.log(ID, "eee");
  const user = await Dynamo.delete(ID, "WahabTable").catch((err) => {
    console.log("error in Dynamo Get", err);
    return null;
  });

  if (!user) {
    return formatJSONResponse({ message: "Failed to get user by ID" });
  }

  return formatJSONResponse({ message: user });
};

export const DeleteVal = middyfy(deleteVal);

// *********************** GEt All VAlue VALUE ********************************** //
const allval1: ValidatedEventAPIGatewayProxyEvent<typeof allval> = async (
  event
) => {
  // let ID = event.body.ID;
  // console.log(ID, "eee");
  const user = await Dynamo.getalldata("WahabTable").catch((err) => {
    console.log("error in Dynamo Get", err);
    return null;
  });

  if (!user) {
    return formatJSONResponse({ message: "Failed to get user by ID" });
  }

  return formatJSONResponse({ message: user });
};

export const getAllVal = middyfy(allval1);
