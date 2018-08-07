"use strict";
const Constants = require ("../../../Constants");
const GoldBase = require("../setTC17/Gold");

class Gold extends GoldBase {
  constructor (game) {
    super(game, "Gold", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Gold;
