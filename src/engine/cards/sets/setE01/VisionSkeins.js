"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisionSkeins extends UnimplementedCard {
  constructor (game) {
    super(game, "Vision Skeins", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = VisionSkeins;
