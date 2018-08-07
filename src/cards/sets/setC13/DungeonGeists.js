"use strict";
const Constants = require ("../../../Constants");
const DungeonGeistsBase = require("../setCMA/DungeonGeists");

class DungeonGeists extends DungeonGeistsBase {
  constructor (game) {
    super(game, "Dungeon Geists", "Commander 2013", "C13");
  }
}

module.exports = DungeonGeists;
