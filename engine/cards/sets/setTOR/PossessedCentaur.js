"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossessedCentaur extends Card {
  constructor(game) {
    super(game, "Possessed Centaur", "Torment", "TOR");
  }
}

module.exports = PossessedCentaur;
