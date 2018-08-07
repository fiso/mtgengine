"use strict";
const Constants = require ("../../../Constants");
const GrenzoDungeonWardenBase = require("../setA25/GrenzoDungeonWarden");

class GrenzoDungeonWarden extends GrenzoDungeonWardenBase {
  constructor (game) {
    super(game, "Grenzo, Dungeon Warden", "Conspiracy", "CNS");
  }
}

module.exports = GrenzoDungeonWarden;
