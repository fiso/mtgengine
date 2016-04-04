"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingDream extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Dream", "Stronghold", "STH");
  }
}

module.exports = WalkingDream;
