"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RageExtractor extends Card {
  constructor(game) {
    super(game, "Rage Extractor", "New Phyrexia", "NPH");
  }
}

module.exports = RageExtractor;
