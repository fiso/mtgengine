"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlissasCourier extends Card {
  constructor(game) {
    super(game, "Glissa's Courier", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GlissasCourier;
