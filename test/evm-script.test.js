const encodeEvmScript = require("../src/evm-script-encoder");

test("encodes an EVM script", () => {
  const script = encodeEvmScript.default(
    "voteFor(uint)",
    [12],
    "0xBa37B002AbaFDd8E89a1995dA52740bbC013D992"
  );
  expect(script).toBe(
    "0x00000001ba37b002abafdd8e89a1995da52740bbc013d99200000024f22632fd000000000000000000000000000000000000000000000000000000000000000c"
  );
});
