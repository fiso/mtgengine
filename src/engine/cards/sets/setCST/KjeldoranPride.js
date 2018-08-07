"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranPride extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Pride", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranPride;
