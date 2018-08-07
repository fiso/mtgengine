"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaplessResearcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Hapless Researcher", "Judgment", "JUD");
  }
}

module.exports = HaplessResearcher;
