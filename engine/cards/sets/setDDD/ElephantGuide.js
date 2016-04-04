"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElephantGuideBase = require("../setDD3_GVL/ElephantGuide.js");

class ElephantGuide extends ElephantGuideBase {
  constructor(game) {
    super(game, "Elephant Guide", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = ElephantGuide;
