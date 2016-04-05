"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TauntingChallenge extends UnimplementedCard {
  constructor(game) {
    super(game, "Taunting Challenge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TauntingChallenge;
