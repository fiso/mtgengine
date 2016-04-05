"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallofTriumph extends UnimplementedCard {
  constructor(game) {
    super(game, "Hall of Triumph", "Journey into Nyx", "JOU");
  }
}

module.exports = HallofTriumph;
