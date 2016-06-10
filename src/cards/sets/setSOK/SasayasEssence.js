"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SasayasEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Sasaya's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SasayasEssence;
