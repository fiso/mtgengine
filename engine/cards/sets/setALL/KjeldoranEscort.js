"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranEscort extends Card {
  constructor(game) {
    super(game, "Kjeldoran Escort", "Alliances", "ALL");
  }
}

module.exports = KjeldoranEscort;
