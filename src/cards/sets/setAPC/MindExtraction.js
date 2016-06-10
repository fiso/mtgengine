"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindExtraction extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Extraction", "Apocalypse", "APC");
  }
}

module.exports = MindExtraction;
