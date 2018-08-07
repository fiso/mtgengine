"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariVisionary extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Visionary", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SoltariVisionary;
