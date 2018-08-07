"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Blood", "Mirrodin", "MRD");
  }
}

module.exports = WallofBlood;
