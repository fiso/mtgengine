"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Blightning", "Masters 25", "A25");
  }
}

module.exports = Blightning;
