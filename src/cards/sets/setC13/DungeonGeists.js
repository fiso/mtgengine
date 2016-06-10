"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DungeonGeists extends UnimplementedCard {
  constructor (game) {
    super(game, "Dungeon Geists", "Commander 2013 Edition", "C13");
  }
}

module.exports = DungeonGeists;
