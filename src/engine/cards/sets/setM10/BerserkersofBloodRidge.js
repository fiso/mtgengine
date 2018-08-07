"use strict";
const Constants = require ("../../../Constants");
const BerserkersofBloodRidgeBase = require("../setM11/BerserkersofBloodRidge");

class BerserkersofBloodRidge extends BerserkersofBloodRidgeBase {
  constructor (game) {
    super(game, "Berserkers of Blood Ridge", "Magic 2010", "M10");
  }
}

module.exports = BerserkersofBloodRidge;
