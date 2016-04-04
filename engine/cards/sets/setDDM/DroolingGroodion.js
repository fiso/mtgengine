"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DroolingGroodion extends Card {
  constructor(game) {
    super(game, "Drooling Groodion", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DroolingGroodion;
