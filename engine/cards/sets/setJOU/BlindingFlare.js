"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingFlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinding Flare", "Journey into Nyx", "JOU");
  }
}

module.exports = BlindingFlare;
