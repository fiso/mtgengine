"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DjinnIlluminatus extends UnimplementedCard {
  constructor (game) {
    super(game, "Djinn Illuminatus", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DjinnIlluminatus;
