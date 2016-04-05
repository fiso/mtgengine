"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Root Sliver", "Legions", "LGN");
  }
}

module.exports = RootSliver;
