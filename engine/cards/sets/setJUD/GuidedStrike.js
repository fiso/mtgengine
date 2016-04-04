"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuidedStrike extends Card {
  constructor(game) {
    super(game, "Guided Strike", "Judgment", "JUD");
  }
}

module.exports = GuidedStrike;
