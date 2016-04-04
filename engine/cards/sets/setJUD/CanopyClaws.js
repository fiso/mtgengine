"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyClaws extends Card {
  constructor(game) {
    super(game, "Canopy Claws", "Judgment", "JUD");
  }
}

module.exports = CanopyClaws;
