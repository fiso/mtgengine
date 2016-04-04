"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattletideAlchemist extends Card {
  constructor(game) {
    super(game, "Battletide Alchemist", "Morningtide", "MOR");
  }
}

module.exports = BattletideAlchemist;
