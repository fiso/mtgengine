"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrPropagator extends Card {
  constructor(game) {
    super(game, "Myr Propagator", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrPropagator;
