"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaggerdromeImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Daggerdrome Imp", "Battlebond", "BBD");
  }
}

module.exports = DaggerdromeImp;
