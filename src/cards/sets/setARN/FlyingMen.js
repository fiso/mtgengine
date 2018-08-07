"use strict";
const Constants = require ("../../../Constants");
const FlyingMenBase = require("../setTSB/FlyingMen");

class FlyingMen extends FlyingMenBase {
  constructor (game) {
    super(game, "Flying Men", "Arabian Nights", "ARN");
  }
}

module.exports = FlyingMen;
