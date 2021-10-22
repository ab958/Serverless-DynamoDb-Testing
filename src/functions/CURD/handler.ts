import type { ValidatedEventAPIGatewayProxyEvent } from "../../libs/apiGateway";
import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";
import Dynamo from "../../libs/dynamo";
import { update } from "./schema";
// import { update, save, delete1, allval } from "./schema";1
import { Handler } from "aws-lambda";

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

export const savedata: Handler = async (event) => {
  console.log(event.body, "eee");
  const newUser = await Dynamo.write(event.body, "WahabTable").catch((err) => {
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

export const deleteVal: Handler = async (event) => {
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
export const getalldata: Handler = async () => {
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

export const getAllVal = middyfy(getalldata);
