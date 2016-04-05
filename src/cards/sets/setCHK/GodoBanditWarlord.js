"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodoBanditWarlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Godo, Bandit Warlord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GodoBanditWarlord;
