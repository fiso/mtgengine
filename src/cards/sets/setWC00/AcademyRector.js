"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcademyRector extends UnimplementedCard {
  constructor (game) {
    super(game, "Academy Rector", "World Championship Decks 2000", "WC00");
  }
}

module.exports = AcademyRector;
