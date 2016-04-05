"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LionsEyeDiamond extends UnimplementedCard {
  constructor(game) {
    super(game, "Lion's Eye Diamond", "Mirage", "MIR");
  }
}

module.exports = LionsEyeDiamond;
