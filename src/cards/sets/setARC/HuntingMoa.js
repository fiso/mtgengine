"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingMoa extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunting Moa", "Archenemy", "ARC");
  }
}

module.exports = HuntingMoa;
