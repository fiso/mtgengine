"use strict";
const Constants = require ("../../../Constants");
const ForsakenWastesBase = require("../setWC97/ForsakenWastes");

class ForsakenWastes extends ForsakenWastesBase {
  constructor (game) {
    super(game, "Forsaken Wastes", "Mirage", "MIR");
  }
}

module.exports = ForsakenWastes;
