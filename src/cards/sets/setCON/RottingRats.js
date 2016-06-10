"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottingRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Rotting Rats", "Conflux", "CON");
  }
}

module.exports = RottingRats;
