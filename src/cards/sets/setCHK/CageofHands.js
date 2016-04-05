"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CageofHands extends UnimplementedCard {
  constructor(game) {
    super(game, "Cage of Hands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CageofHands;
