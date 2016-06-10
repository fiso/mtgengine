"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenzySliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzy Sliver", "Future Sight", "FUT");
  }
}

module.exports = FrenzySliver;
