"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eureka extends UnimplementedCard {
  constructor (game) {
    super(game, "Eureka", "Vintage Masters", "VMA");
  }
}

module.exports = Eureka;
