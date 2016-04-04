"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrenzoDungeonWardenBase = require("../setCNS/GrenzoDungeonWarden.js");

class GrenzoDungeonWarden extends GrenzoDungeonWardenBase {
  constructor(game) {
    super(game, "Grenzo, Dungeon Warden", "Vintage Masters", "VMA");
  }
}

module.exports = GrenzoDungeonWarden;
