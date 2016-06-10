"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PullingTeeth extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulling Teeth", "Morningtide", "MOR");
  }
}

module.exports = PullingTeeth;
