import { JsonRpc } from "eosjs";

const rpc = new JsonRpc("https://api.eosnewyork.io");

export function getEosInfo() {
  return rpc.get_info();
}

export function getBlock(blockNum) {
  console.log("getting block", blockNum);
  return rpc.get_block(blockNum);
}
