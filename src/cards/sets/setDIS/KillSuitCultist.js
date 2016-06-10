"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillSuitCultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Kill-Suit Cultist", "Dissension", "DIS");
  }
}

module.exports = KillSuitCultist;
