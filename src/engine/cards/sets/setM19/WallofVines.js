"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofVines extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Vines", "Core Set 2019", "M19");
  }
}

module.exports = WallofVines;
