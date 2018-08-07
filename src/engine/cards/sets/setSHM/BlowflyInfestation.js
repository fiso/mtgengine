"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlowflyInfestation extends UnimplementedCard {
  constructor (game) {
    super(game, "Blowfly Infestation", "Shadowmoor", "SHM");
  }
}

module.exports = BlowflyInfestation;
