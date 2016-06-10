"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsionicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Psionic Sliver", "Time Spiral", "TSP");
  }
}

module.exports = PsionicSliver;
