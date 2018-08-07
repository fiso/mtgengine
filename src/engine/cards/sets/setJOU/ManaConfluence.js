"use strict";
const Constants = require ("../../../Constants");
const ManaConfluenceBase = require("../setEXP/ManaConfluence");

class ManaConfluence extends ManaConfluenceBase {
  constructor (game) {
    super(game, "Mana Confluence", "Journey into Nyx", "JOU");
  }
}

module.exports = ManaConfluence;
