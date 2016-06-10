"use strict";
const Constants = require ("../../../Constants");
const OphidianBase = require("../setDD3_JVC/Ophidian");

class Ophidian extends OphidianBase {
  constructor (game) {
    super(game, "Ophidian", "Vintage Masters", "VMA");
  }
}

module.exports = Ophidian;
