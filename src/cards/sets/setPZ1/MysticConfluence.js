"use strict";
const Constants = require ("../../../Constants");
const MysticConfluenceBase = require("../setBBD/MysticConfluence");

class MysticConfluence extends MysticConfluenceBase {
  constructor (game) {
    super(game, "Mystic Confluence", "Legendary Cube", "PZ1");
  }
}

module.exports = MysticConfluence;
