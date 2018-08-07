"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setXLN/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Kaladesh", "KLD");
  }
}

module.exports = Demolish;
