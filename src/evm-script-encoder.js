const abi = require("web3-eth-abi");
const { encodeCallScript } = require("@aragon/test-helpers/evmScript");

/**
 * Encode ACT function call
 * @param {string} signature Function signature
 * @param {any[]} params
 */
const encodeActCall = (signature, params = []) => {
  const sigBytes = abi.encodeFunctionSignature(signature);

  const types = signature.replace(")", "").split("(")[1];

  // No params, return signature directly
  if (types === "") {
    return sigBytes;
  }

  const paramBytes = abi.encodeParameters(types.split(","), params);

  return `${sigBytes}${paramBytes.slice(2)}`;
};

/**
 * Encode EVM script for proposal
 * example:
 * const votingAddress = "0x..."
 * encodeEvmScript("setRoboRatePerBlock(uint)", [1], votingAddress)
 *
 * @param {string} signature Function signature to be called on proposal pass
 * @param {any[]} params Function params
 * @param {string} target Address of contract that has address to call
 */
const encodeEvmScript = (signature, params, address) => {
  const action = {
    to: address,
    calldata: encodeActCall(signature, params),
  };

  const script = encodeCallScript([action]);
  return script;
};

exports.default = encodeEvmScript;
