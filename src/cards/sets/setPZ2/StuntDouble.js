"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StuntDouble extends UnimplementedCard {
  constructor (game) {
    super(game, "Stunt Double", "You Make the Cube", "PZ2");
  }
}

module.exports = StuntDouble;
