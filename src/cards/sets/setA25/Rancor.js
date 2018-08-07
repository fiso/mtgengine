"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rancor extends UnimplementedCard {
  constructor (game) {
    super(game, "Rancor", "Masters 25", "A25");
  }
}

module.exports = Rancor;
