"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofSouls extends Card {
  constructor(game) {
    super(game, "Wall of Souls", "Stronghold", "STH");
  }
}

module.exports = WallofSouls;
