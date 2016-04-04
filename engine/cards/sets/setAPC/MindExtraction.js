"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindExtraction extends Card {
  constructor(game) {
    super(game, "Mind Extraction", "Apocalypse", "APC");
  }
}

module.exports = MindExtraction;
