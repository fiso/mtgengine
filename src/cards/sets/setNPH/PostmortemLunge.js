"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PostmortemLunge extends UnimplementedCard {
  constructor (game) {
    super(game, "Postmortem Lunge", "New Phyrexia", "NPH");
  }
}

module.exports = PostmortemLunge;
