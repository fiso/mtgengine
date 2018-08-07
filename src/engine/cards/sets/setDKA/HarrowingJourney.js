"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarrowingJourney extends UnimplementedCard {
  constructor (game) {
    super(game, "Harrowing Journey", "Dark Ascension", "DKA");
  }
}

module.exports = HarrowingJourney;
