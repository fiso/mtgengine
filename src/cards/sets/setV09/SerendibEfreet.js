"use strict";
const Constants = require ("../../../Constants");
const SerendibEfreetBase = require("../setARN/SerendibEfreet");

class SerendibEfreet extends SerendibEfreetBase {
  constructor(game) {
    super(game, "Serendib Efreet", "From the Vault: Exiled", "V09");
  }
}

module.exports = SerendibEfreet;
