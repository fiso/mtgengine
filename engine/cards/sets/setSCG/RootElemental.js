"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootElemental extends Card {
  constructor(game) {
    super(game, "Root Elemental", "Scourge", "SCG");
  }
}

module.exports = RootElemental;
