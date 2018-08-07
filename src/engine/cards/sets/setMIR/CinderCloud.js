"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderCloud extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Cloud", "Mirage", "MIR");
  }
}

module.exports = CinderCloud;
