"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssassinsStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Assassin's Strike", "Battlebond", "BBD");
  }
}

module.exports = AssassinsStrike;
