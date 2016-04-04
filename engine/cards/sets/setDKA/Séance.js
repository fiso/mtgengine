"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Séance extends Card {
  constructor(game) {
    super(game, "Séance", "Dark Ascension", "DKA");
  }
}

module.exports = Séance;
