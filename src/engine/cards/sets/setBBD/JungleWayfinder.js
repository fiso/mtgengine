"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleWayfinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Wayfinder", "Battlebond", "BBD");
  }
}

module.exports = JungleWayfinder;
