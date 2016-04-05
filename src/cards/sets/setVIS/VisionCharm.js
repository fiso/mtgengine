"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisionCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Vision Charm", "Visions", "VIS");
  }
}

module.exports = VisionCharm;
