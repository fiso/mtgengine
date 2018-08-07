"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChakramSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Chakram Slinger", "Battlebond Promos", "PBBD");
  }
}

module.exports = ChakramSlinger;
