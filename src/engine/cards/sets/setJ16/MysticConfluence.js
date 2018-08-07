"use strict";
const Constants = require ("../../../Constants");
const MysticConfluenceBase = require("../setBBD/MysticConfluence");

class MysticConfluence extends MysticConfluenceBase {
  constructor (game) {
    super(game, "Mystic Confluence", "Judge Gift Cards 2016", "J16");
  }
}

module.exports = MysticConfluence;
