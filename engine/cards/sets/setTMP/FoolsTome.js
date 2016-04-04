"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoolsTome extends Card {
  constructor(game) {
    super(game, "Fool's Tome", "Tempest", "TMP");
  }
}

module.exports = FoolsTome;
