"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setXLN/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "Magic 2014", "M14");
  }
}

module.exports = Demolish;
