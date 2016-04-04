"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpsMischief extends Card {
  constructor(game) {
    super(game, "Imp's Mischief", "Planar Chaos", "PLC");
  }
}

module.exports = ImpsMischief;
