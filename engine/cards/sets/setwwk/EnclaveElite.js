"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnclaveEliteBase = require("../setCNS/EnclaveElite.js");

class EnclaveElite extends EnclaveEliteBase {
  constructor(game) {
    super(game, "Enclave Elite", "Worldwake", "WWK");
  }
}

module.exports = EnclaveElite;
