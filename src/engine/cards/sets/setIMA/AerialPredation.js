"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialPredation extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Predation", "Iconic Masters", "IMA");
  }
}

module.exports = AerialPredation;
