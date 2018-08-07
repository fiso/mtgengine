"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bird extends UnimplementedCard {
  constructor (game) {
    super(game, "Bird", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Bird;
