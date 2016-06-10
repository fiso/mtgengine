"use strict";
const Constants = require ("../../../Constants");
const ManaConfluenceBase = require("../setJOU/ManaConfluence");

class ManaConfluence extends ManaConfluenceBase {
  constructor (game) {
    super(game, "Mana Confluence", "Zendikar Expedition", "EXP");
  }
}

module.exports = ManaConfluence;
