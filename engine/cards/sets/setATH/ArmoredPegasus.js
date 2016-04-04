"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredPegasus extends Card {
  constructor(game) {
    super(game, "Armored Pegasus", "Anthologies", "ATH");
  }
}

module.exports = ArmoredPegasus;
