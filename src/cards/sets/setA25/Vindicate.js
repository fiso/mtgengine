"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vindicate extends UnimplementedCard {
  constructor (game) {
    super(game, "Vindicate", "Masters 25", "A25");
  }
}

module.exports = Vindicate;
