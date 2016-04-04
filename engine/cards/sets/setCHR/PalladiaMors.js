"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PalladiaMors extends Card {
  constructor(game) {
    super(game, "Palladia-Mors", "Chronicles", "CHR");
  }
}

module.exports = PalladiaMors;
