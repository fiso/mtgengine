"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Glider", "Prophecy", "PCY");
  }
}

module.exports = BogGlider;
