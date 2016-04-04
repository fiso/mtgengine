"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyVista extends Card {
  constructor(game) {
    super(game, "Canopy Vista", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CanopyVista;
