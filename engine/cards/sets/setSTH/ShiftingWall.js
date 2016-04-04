"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftingWall extends Card {
  constructor(game) {
    super(game, "Shifting Wall", "Stronghold", "STH");
  }
}

module.exports = ShiftingWall;
