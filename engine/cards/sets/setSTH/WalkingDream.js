"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingDream extends Card {
  constructor(game) {
    super(game, "Walking Dream", "Stronghold", "STH");
  }
}

module.exports = WalkingDream;
