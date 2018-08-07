"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallofTriumph extends UnimplementedCard {
  constructor (game) {
    super(game, "Hall of Triumph", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = HallofTriumph;
