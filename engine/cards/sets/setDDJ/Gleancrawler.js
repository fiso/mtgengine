"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gleancrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Gleancrawler", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Gleancrawler;
