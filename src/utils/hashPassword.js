const { createHash } = require("hash-wasm");

const hashPassword = async (password) => {
  return await createHash("whirlpool", { input: password });
};

module.exports = { hashPassword };
