"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootsofLife extends Card {
  constructor(game) {
    super(game, "Roots of Life", "Mirage", "MIR");
  }
}

module.exports = RootsofLife;
