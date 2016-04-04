"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuickSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Quick Sliver", "Legions", "LGN");
  }
}

module.exports = QuickSliver;
