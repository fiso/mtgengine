"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianBetrayers extends Card {
  constructor(game) {
    super(game, "Viridian Betrayers", "New Phyrexia", "NPH");
  }
}

module.exports = ViridianBetrayers;
