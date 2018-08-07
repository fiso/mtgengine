"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodcrazedHoplite extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodcrazed Hoplite", "Journey into Nyx", "JOU");
  }
}

module.exports = BloodcrazedHoplite;
