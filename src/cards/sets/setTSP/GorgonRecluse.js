"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorgonRecluse extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorgon Recluse", "Time Spiral", "TSP");
  }
}

module.exports = GorgonRecluse;
