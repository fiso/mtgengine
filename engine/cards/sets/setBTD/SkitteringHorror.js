"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkitteringHorror extends Card {
  constructor(game) {
    super(game, "Skittering Horror", "Beatdown Box Set", "BTD");
  }
}

module.exports = SkitteringHorror;
