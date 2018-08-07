"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Charm", "Masters 25", "A25");
  }
}

module.exports = BorosCharm;
