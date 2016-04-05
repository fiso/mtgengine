"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandStream extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodland Stream", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WoodlandStream;
