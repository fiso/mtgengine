"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantEmbrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Embrace", "Time Spiral", "TSP");
  }
}

module.exports = VerdantEmbrace;
