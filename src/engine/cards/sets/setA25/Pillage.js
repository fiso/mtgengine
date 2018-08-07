"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Pillage", "Masters 25", "A25");
  }
}

module.exports = Pillage;
