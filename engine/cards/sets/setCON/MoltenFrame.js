"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenFrame extends UnimplementedCard {
  constructor(game) {
    super(game, "Molten Frame", "Conflux", "CON");
  }
}

module.exports = MoltenFrame;
