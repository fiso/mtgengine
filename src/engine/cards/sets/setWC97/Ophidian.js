"use strict";
const Constants = require ("../../../Constants");
const OphidianBase = require("../setJVC/Ophidian");

class Ophidian extends OphidianBase {
  constructor (game) {
    super(game, "Ophidian", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Ophidian;
