"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowDogs extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollow Dogs", "Beatdown Box Set", "BTD");
  }
}

module.exports = HollowDogs;
