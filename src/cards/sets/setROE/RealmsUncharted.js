"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealmsUncharted extends UnimplementedCard {
  constructor (game) {
    super(game, "Realms Uncharted", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RealmsUncharted;
