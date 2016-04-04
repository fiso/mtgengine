"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KithkinArmor extends Card {
  constructor(game) {
    super(game, "Kithkin Armor", "Weatherlight", "WTH");
  }
}

module.exports = KithkinArmor;
