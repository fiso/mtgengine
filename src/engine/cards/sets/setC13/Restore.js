"use strict";
const Constants = require ("../../../Constants");
const RestoreBase = require("../setCMA/Restore");

class Restore extends RestoreBase {
  constructor (game) {
    super(game, "Restore", "Commander 2013", "C13");
  }
}

module.exports = Restore;
