"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossessedSkaab extends Card {
  constructor(game) {
    super(game, "Possessed Skaab", "Magic Origins", "ORI");
  }
}

module.exports = PossessedSkaab;
