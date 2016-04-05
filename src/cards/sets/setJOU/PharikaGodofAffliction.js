"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikaGodofAffliction extends UnimplementedCard {
  constructor(game) {
    super(game, "Pharika, God of Affliction", "Journey into Nyx", "JOU");
  }
}

module.exports = PharikaGodofAffliction;
