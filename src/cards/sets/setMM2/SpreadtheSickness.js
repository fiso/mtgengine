"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadtheSickness extends UnimplementedCard {
  constructor (game) {
    super(game, "Spread the Sickness", "Modern Masters 2015", "MM2");
  }
}

module.exports = SpreadtheSickness;
