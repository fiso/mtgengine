"use strict";
const Constants = require ("../../../Constants");
const DungeonGeistsBase = require("../setC13/DungeonGeists");

class DungeonGeists extends DungeonGeistsBase {
  constructor(game) {
    super(game, "Dungeon Geists", "Dark Ascension", "DKA");
  }
}

module.exports = DungeonGeists;
