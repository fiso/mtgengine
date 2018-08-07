"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firestorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Firestorm", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Firestorm;
