"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye Spy", "Starter 1999", "S99");
  }
}

module.exports = EyeSpy;
