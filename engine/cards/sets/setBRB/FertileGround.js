"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FertileGround extends UnimplementedCard {
  constructor(game) {
    super(game, "Fertile Ground", "Battle Royale Box Set", "BRB");
  }
}

module.exports = FertileGround;
