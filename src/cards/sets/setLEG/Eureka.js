"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eureka extends UnimplementedCard {
  constructor(game) {
    super(game, "Eureka", "Legends", "LEG");
  }
}

module.exports = Eureka;
