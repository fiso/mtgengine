"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VisionCharm extends Card {
  constructor(game) {
    super(game, "Vision Charm", "Visions", "VIS");
  }
}

module.exports = VisionCharm;
