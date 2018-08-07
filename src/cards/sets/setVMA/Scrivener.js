"use strict";
const Constants = require ("../../../Constants");
const ScrivenerBase = require("../setTPR/Scrivener");

class Scrivener extends ScrivenerBase {
  constructor (game) {
    super(game, "Scrivener", "Vintage Masters", "VMA");
  }
}

module.exports = Scrivener;
