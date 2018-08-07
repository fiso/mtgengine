"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LionsEyeDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Lion's Eye Diamond", "Vintage Masters", "VMA");
  }
}

module.exports = LionsEyeDiamond;
