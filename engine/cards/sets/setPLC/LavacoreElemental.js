"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavacoreElemental extends Card {
  constructor(game) {
    super(game, "Lavacore Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = LavacoreElemental;
