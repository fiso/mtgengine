"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Shaman", "Ice Age", "ICE");
  }
}

module.exports = BalduvianShaman;
