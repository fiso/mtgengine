"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vorapede extends Card {
  constructor(game) {
    super(game, "Vorapede", "Dark Ascension", "DKA");
  }
}

module.exports = Vorapede;
