"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandSilos extends Card {
  constructor(game) {
    super(game, "Sand Silos", "Fallen Empires", "FEM");
  }
}

module.exports = SandSilos;
