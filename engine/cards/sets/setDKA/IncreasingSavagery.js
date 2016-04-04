"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingSavagery extends UnimplementedCard {
  constructor(game) {
    super(game, "Increasing Savagery", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingSavagery;
