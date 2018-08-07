"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Spy", "Unstable Tokens", "TUST");
  }
}

module.exports = FaerieSpy;
