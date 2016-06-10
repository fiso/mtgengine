"use strict";
const Constants = require ("../../../Constants");
const GambleBase = require("../setUSG/Gamble");

class Gamble extends GambleBase {
  constructor (game) {
    super(game, "Gamble", "Vintage Masters", "VMA");
  }
}

module.exports = Gamble;
