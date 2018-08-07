"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingDestiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Destiny", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LivingDestiny;
