"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DungeonGeists extends Card {
  constructor(game) {
    super(game, "Dungeon Geists", "Commander 2013 Edition", "C13");
  }
}

module.exports = DungeonGeists;
