"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaVein extends Card {
  constructor(game) {
    super(game, "Magma Vein", "Odyssey", "ODY");
  }
}

module.exports = MagmaVein;
