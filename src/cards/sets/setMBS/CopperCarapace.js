"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperCarapace extends UnimplementedCard {
  constructor(game) {
    super(game, "Copper Carapace", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CopperCarapace;
