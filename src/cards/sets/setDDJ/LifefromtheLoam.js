"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifefromtheLoam extends UnimplementedCard {
  constructor (game) {
    super(game, "Life from the Loam", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LifefromtheLoam;
