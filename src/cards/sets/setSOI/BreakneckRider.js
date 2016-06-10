"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakneckRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Breakneck Rider", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BreakneckRider;
