"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacetheMindSculptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, the Mind Sculptor", "Masters 25", "A25");
  }
}

module.exports = JacetheMindSculptor;
