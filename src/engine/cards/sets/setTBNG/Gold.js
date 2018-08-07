"use strict";
const Constants = require ("../../../Constants");
const GoldBase = require("../setTC17/Gold");

class Gold extends GoldBase {
  constructor (game) {
    super(game, "Gold", "Born of the Gods Tokens", "TBNG");
  }
}

module.exports = Gold;
