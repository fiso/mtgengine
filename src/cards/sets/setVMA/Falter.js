"use strict";
const Constants = require ("../../../Constants");
const FalterBase = require("../setUSG/Falter");

class Falter extends FalterBase {
  constructor (game) {
    super(game, "Falter", "Vintage Masters", "VMA");
  }
}

module.exports = Falter;
