"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gone extends Card {
  constructor(game) {
    super(game, "Gone", "Planar Chaos", "PLC");
  }
}

module.exports = Gone;
