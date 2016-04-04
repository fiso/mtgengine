"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExclusionRitual extends Card {
  constructor(game) {
    super(game, "Exclusion Ritual", "New Phyrexia", "NPH");
  }
}

module.exports = ExclusionRitual;
