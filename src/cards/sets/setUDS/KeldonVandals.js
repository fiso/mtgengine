"use strict";
const Constants = require ("../../../Constants");
const KeldonVandalsBase = require("../setTD0/KeldonVandals");

class KeldonVandals extends KeldonVandalsBase {
  constructor (game) {
    super(game, "Keldon Vandals", "Urza's Destiny", "UDS");
  }
}

module.exports = KeldonVandals;
