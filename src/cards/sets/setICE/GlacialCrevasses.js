"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialCrevasses extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Crevasses", "Ice Age", "ICE");
  }
}

module.exports = GlacialCrevasses;
