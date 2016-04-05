"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondChance extends UnimplementedCard {
  constructor(game) {
    super(game, "Second Chance", "Urza's Legacy", "ULG");
  }
}

module.exports = SecondChance;
