"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RageExtractor extends UnimplementedCard {
  constructor(game) {
    super(game, "Rage Extractor", "New Phyrexia", "NPH");
  }
}

module.exports = RageExtractor;
