"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PullingTeeth extends Card {
  constructor(game) {
    super(game, "Pulling Teeth", "Morningtide", "MOR");
  }
}

module.exports = PullingTeeth;
