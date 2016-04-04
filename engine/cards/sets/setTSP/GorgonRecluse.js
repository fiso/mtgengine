"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorgonRecluse extends Card {
  constructor(game) {
    super(game, "Gorgon Recluse", "Time Spiral", "TSP");
  }
}

module.exports = GorgonRecluse;
