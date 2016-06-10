"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Sliver", "Legions", "LGN");
  }
}

module.exports = PlatedSliver;
