"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErayosEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Erayo's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ErayosEssence;
