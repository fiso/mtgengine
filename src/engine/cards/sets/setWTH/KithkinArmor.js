"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Armor", "Weatherlight", "WTH");
  }
}

module.exports = KithkinArmor;
