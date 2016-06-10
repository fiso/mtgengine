"use strict";
const Constants = require ("../../../Constants");
const GrenzoDungeonWardenBase = require("../setCNS/GrenzoDungeonWarden");

class GrenzoDungeonWarden extends GrenzoDungeonWardenBase {
  constructor (game) {
    super(game, "Grenzo, Dungeon Warden", "Vintage Masters", "VMA");
  }
}

module.exports = GrenzoDungeonWarden;
