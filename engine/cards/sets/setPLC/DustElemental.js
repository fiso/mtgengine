"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DustElemental extends Card {
  constructor(game) {
    super(game, "Dust Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = DustElemental;
