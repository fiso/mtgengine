"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BerserkersofBloodRidgeBase = require("../setM10/BerserkersofBloodRidge.js");

class BerserkersofBloodRidge extends BerserkersofBloodRidgeBase {
  constructor(game) {
    super(game, "Berserkers of Blood Ridge", "Magic 2011", "M11");
  }
}

module.exports = BerserkersofBloodRidge;
