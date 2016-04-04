"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Portent extends UnimplementedCard {
  constructor(game) {
    super(game, "Portent", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Portent;
