"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SophicCentaur extends Card {
  constructor(game) {
    super(game, "Sophic Centaur", "Planar Chaos", "PLC");
  }
}

module.exports = SophicCentaur;
