const encodeEvmScript = require("./evm-script-encoder");
const config = require("../config");

const encodedEvmScript = encodeEvmScript.default(
  config.default.functionSignature,
  config.default.params,
  config.default.targetAddress
);

console.log(`
Encoded EVM script for 
target contract address: ${config.default.targetAddress}
to call function signature: ${config.default.functionSignature}
with parameters: ${config.default.params}

${encodedEvmScript}
`);
