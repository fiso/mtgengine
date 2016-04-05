"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuidedStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Guided Strike", "Judgment", "JUD");
  }
}

module.exports = GuidedStrike;
