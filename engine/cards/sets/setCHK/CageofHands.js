"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CageofHands extends Card {
  constructor(game) {
    super(game, "Cage of Hands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CageofHands;
