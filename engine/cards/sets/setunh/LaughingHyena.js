"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaughingHyena extends Card {
  constructor(game) {
    super(game, "Laughing Hyena", "Unhinged", "UNH");
  }
}

module.exports = LaughingHyena;
