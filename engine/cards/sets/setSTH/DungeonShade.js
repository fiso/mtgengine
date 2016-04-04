"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DungeonShade extends Card {
  constructor(game) {
    super(game, "Dungeon Shade", "Stronghold", "STH");
  }
}

module.exports = DungeonShade;
