"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abeyance extends UnimplementedCard {
  constructor (game) {
    super(game, "Abeyance", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Abeyance;
