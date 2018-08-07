"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DungeonGeists extends UnimplementedCard {
  constructor (game) {
    super(game, "Dungeon Geists", "Commander Anthology", "CMA");
  }
}

module.exports = DungeonGeists;
