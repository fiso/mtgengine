"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrixisIllusionist extends Card {
  constructor(game) {
    super(game, "Grixis Illusionist", "Conflux", "CON");
  }
}

module.exports = GrixisIllusionist;
