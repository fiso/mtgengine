"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Simoon", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Simoon;
