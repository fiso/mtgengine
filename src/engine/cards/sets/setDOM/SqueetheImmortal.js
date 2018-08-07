"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueetheImmortal extends UnimplementedCard {
  constructor (game) {
    super(game, "Squee, the Immortal", "Dominaria", "DOM");
  }
}

module.exports = SqueetheImmortal;
