"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Contagion extends Card {
  constructor(game) {
    super(game, "Contagion", "Alliances", "ALL");
  }
}

module.exports = Contagion;
