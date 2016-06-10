"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Brood Sliver", "Legions", "LGN");
  }
}

module.exports = BroodSliver;
