"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoketheFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoke the Flames", "Friday Night Magic", "pFNM");
  }
}

module.exports = StoketheFlames;
