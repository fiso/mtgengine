"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RogueElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Rogue Elephant", "Weatherlight", "WTH");
  }
}

module.exports = RogueElephant;
