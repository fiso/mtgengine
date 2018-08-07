"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaledHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Scaled Hulk", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ScaledHulk;
