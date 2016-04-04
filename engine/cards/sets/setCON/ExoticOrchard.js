"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExoticOrchard extends Card {
  constructor(game) {
    super(game, "Exotic Orchard", "Conflux", "CON");
  }
}

module.exports = ExoticOrchard;
