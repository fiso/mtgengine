"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DungeonShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Dungeon Shade", "Stronghold", "STH");
  }
}

module.exports = DungeonShade;
