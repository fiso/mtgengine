"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HunterSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunter Sliver", "Legions", "LGN");
  }
}

module.exports = HunterSliver;
