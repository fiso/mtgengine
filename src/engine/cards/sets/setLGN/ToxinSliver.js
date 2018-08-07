"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToxinSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Toxin Sliver", "Legions", "LGN");
  }
}

module.exports = ToxinSliver;
