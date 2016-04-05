"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrematureBurial extends UnimplementedCard {
  constructor(game) {
    super(game, "Premature Burial", "Time Spiral", "TSP");
  }
}

module.exports = PrematureBurial;
