"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkConfidant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Confidant", "Modern Masters 2015", "MM2");
  }
}

module.exports = DarkConfidant;
