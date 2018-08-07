"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PutridLeech extends UnimplementedCard {
  constructor (game) {
    super(game, "Putrid Leech", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PutridLeech;
