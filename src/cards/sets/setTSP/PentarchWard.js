"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentarchWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentarch Ward", "Time Spiral", "TSP");
  }
}

module.exports = PentarchWard;
