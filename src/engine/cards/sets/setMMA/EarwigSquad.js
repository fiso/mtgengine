"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarwigSquad extends UnimplementedCard {
  constructor (game) {
    super(game, "Earwig Squad", "Modern Masters", "MMA");
  }
}

module.exports = EarwigSquad;
