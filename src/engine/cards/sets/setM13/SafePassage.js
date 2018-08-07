"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafePassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Safe Passage", "Magic 2013", "M13");
  }
}

module.exports = SafePassage;
