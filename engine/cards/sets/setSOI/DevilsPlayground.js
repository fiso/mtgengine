"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevilsPlayground extends UnimplementedCard {
  constructor(game) {
    super(game, "Devils' Playground", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DevilsPlayground;
