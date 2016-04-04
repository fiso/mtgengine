"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuidedPassage extends Card {
  constructor(game) {
    super(game, "Guided Passage", "Apocalypse", "APC");
  }
}

module.exports = GuidedPassage;
