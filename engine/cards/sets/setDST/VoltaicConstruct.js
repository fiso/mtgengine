"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoltaicConstruct extends Card {
  constructor(game) {
    super(game, "Voltaic Construct", "Darksteel", "DST");
  }
}

module.exports = VoltaicConstruct;
