"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitanForge extends UnimplementedCard {
  constructor(game) {
    super(game, "Titan Forge", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TitanForge;
