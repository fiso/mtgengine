"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuidedPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Guided Passage", "Apocalypse", "APC");
  }
}

module.exports = GuidedPassage;
