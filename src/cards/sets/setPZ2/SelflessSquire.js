"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelflessSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfless Squire", "You Make the Cube", "PZ2");
  }
}

module.exports = SelflessSquire;
