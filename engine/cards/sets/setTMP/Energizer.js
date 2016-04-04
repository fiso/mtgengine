"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Energizer extends Card {
  constructor(game) {
    super(game, "Energizer", "Tempest", "TMP");
  }
}

module.exports = Energizer;
