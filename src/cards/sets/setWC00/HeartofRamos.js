"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofRamos extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Ramos", "World Championship Decks 2000", "WC00");
  }
}

module.exports = HeartofRamos;
