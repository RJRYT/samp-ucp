const { whirlpool } = require("hash-wasm");

const hashPassword = async (password) => {
  return await whirlpool(password);
};

module.exports = { hashPassword };
