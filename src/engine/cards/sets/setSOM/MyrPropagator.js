"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrPropagator extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Propagator", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrPropagator;
