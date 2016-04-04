"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Hydra", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianHydra;
