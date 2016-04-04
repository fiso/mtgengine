"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MatterReshaper extends Card {
  constructor(game) {
    super(game, "Matter Reshaper", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MatterReshaper;
