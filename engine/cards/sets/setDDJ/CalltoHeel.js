"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalltoHeel extends Card {
  constructor(game) {
    super(game, "Call to Heel", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = CalltoHeel;
