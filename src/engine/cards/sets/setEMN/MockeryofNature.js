"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MockeryofNature extends UnimplementedCard {
  constructor (game) {
    super(game, "Mockery of Nature", "Eldritch Moon", "EMN");
  }
}

module.exports = MockeryofNature;
