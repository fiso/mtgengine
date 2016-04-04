"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DungeonGeistsBase = require("../setC13/DungeonGeists.js");

class DungeonGeists extends DungeonGeistsBase {
  constructor(game) {
    super(game, "Dungeon Geists", "Dark Ascension", "DKA");
  }
}

module.exports = DungeonGeists;
