"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Congregate extends UnimplementedCard {
  constructor (game) {
    super(game, "Congregate", "Masters 25", "A25");
  }
}

module.exports = Congregate;
