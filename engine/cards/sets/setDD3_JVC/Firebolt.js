"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Firebolt extends Card {
  constructor(game) {
    super(game, "Firebolt", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Firebolt;
