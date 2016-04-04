"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DustCorona extends Card {
  constructor(game) {
    super(game, "Dust Corona", "Planar Chaos", "PLC");
  }
}

module.exports = DustCorona;
