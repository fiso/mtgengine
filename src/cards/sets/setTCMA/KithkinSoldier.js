"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Soldier", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = KithkinSoldier;
