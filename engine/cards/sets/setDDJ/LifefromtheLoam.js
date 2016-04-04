"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifefromtheLoam extends Card {
  constructor(game) {
    super(game, "Life from the Loam", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LifefromtheLoam;
