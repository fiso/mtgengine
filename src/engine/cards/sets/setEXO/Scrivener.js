"use strict";
const Constants = require ("../../../Constants");
const ScrivenerBase = require("../setTPR/Scrivener");

class Scrivener extends ScrivenerBase {
  constructor (game) {
    super(game, "Scrivener", "Exodus", "EXO");
  }
}

module.exports = Scrivener;
