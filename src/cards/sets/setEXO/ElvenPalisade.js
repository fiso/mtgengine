"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenPalisade extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Palisade", "Exodus", "EXO");
  }
}

module.exports = ElvenPalisade;
