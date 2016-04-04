"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LooseLips extends UnimplementedCard {
  constructor(game) {
    super(game, "Loose Lips", "Unhinged", "UNH");
  }
}

module.exports = LooseLips;
