"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofForgottenPharaohs extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Forgotten Pharaohs", "Hour of Devastation", "HOU");
  }
}

module.exports = WallofForgottenPharaohs;
