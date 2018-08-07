"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofKelp extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Kelp", "Masters Edition II", "ME2");
  }
}

module.exports = WallofKelp;
