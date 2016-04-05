"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattletideAlchemist extends UnimplementedCard {
  constructor(game) {
    super(game, "Battletide Alchemist", "Morningtide", "MOR");
  }
}

module.exports = BattletideAlchemist;
