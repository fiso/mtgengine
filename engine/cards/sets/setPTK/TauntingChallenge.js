"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TauntingChallenge extends Card {
  constructor(game) {
    super(game, "Taunting Challenge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TauntingChallenge;
