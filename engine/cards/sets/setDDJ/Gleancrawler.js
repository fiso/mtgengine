"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gleancrawler extends Card {
  constructor(game) {
    super(game, "Gleancrawler", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Gleancrawler;
