"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeeringGargoyle extends Card {
  constructor(game) {
    super(game, "Leering Gargoyle", "Mirage", "MIR");
  }
}

module.exports = LeeringGargoyle;
