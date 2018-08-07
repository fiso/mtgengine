"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConclavePhalanx extends UnimplementedCard {
  constructor (game) {
    super(game, "Conclave Phalanx", "Modern Masters 2015", "MM2");
  }
}

module.exports = ConclavePhalanx;
