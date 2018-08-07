"use strict";
const Constants = require ("../../../Constants");
const SerumPowderBase = require("../setIMA/SerumPowder");

class SerumPowder extends SerumPowderBase {
  constructor (game) {
    super(game, "Serum Powder", "Darksteel", "DST");
  }
}

module.exports = SerumPowder;
