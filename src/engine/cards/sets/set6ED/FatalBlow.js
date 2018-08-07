"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Fatal Blow", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FatalBlow;
