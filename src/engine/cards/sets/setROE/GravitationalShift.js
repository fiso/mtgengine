"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravitationalShift extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravitational Shift", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GravitationalShift;
