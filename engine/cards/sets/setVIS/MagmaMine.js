"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaMine extends UnimplementedCard {
  constructor(game) {
    super(game, "Magma Mine", "Visions", "VIS");
  }
}

module.exports = MagmaMine;
