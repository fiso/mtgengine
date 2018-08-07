"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoketheFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoke the Flames", "Magic 2015", "M15");
  }
}

module.exports = StoketheFlames;
