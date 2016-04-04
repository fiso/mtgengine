"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TectonicFiend extends Card {
  constructor(game) {
    super(game, "Tectonic Fiend", "Time Spiral", "TSP");
  }
}

module.exports = TectonicFiend;
