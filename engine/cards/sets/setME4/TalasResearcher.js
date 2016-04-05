"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasResearcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Talas Researcher", "Masters Edition IV", "ME4");
  }
}

module.exports = TalasResearcher;
