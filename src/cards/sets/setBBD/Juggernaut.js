"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Juggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Juggernaut", "Battlebond", "BBD");
  }
}

module.exports = Juggernaut;
