"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbsorbVis extends Card {
  constructor(game) {
    super(game, "Absorb Vis", "Conflux", "CON");
  }
}

module.exports = AbsorbVis;
