"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlimmerofGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Glimmer of Genius", "Kaladesh", "KLD");
  }
}

module.exports = GlimmerofGenius;
