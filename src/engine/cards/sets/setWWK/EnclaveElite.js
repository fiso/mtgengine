"use strict";
const Constants = require ("../../../Constants");
const EnclaveEliteBase = require("../setCNS/EnclaveElite");

class EnclaveElite extends EnclaveEliteBase {
  constructor (game) {
    super(game, "Enclave Elite", "Worldwake", "WWK");
  }
}

module.exports = EnclaveElite;
