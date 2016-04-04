"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravitationalShift extends Card {
  constructor(game) {
    super(game, "Gravitational Shift", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GravitationalShift;
