"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Keeper", "Modern Masters 2017", "MM3");
  }
}

module.exports = PitKeeper;
