"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Misfortune extends Card {
  constructor(game) {
    super(game, "Misfortune", "Alliances", "ALL");
  }
}

module.exports = Misfortune;
