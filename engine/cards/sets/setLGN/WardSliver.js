"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Ward Sliver", "Legions", "LGN");
  }
}

module.exports = WardSliver;
