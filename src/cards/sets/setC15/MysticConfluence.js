"use strict";
const Constants = require ("../../../Constants");
const MysticConfluenceBase = require("../setBBD/MysticConfluence");

class MysticConfluence extends MysticConfluenceBase {
  constructor (game) {
    super(game, "Mystic Confluence", "Commander 2015", "C15");
  }
}

module.exports = MysticConfluence;
