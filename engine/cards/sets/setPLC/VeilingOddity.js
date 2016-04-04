"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeilingOddity extends Card {
  constructor(game) {
    super(game, "Veiling Oddity", "Planar Chaos", "PLC");
  }
}

module.exports = VeilingOddity;
