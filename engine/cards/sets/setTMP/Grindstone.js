"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grindstone extends Card {
  constructor(game) {
    super(game, "Grindstone", "Tempest", "TMP");
  }
}

module.exports = Grindstone;
