"use strict";
const Constants = require ("../../../Constants");
const ScrivenerBase = require("../setEXO/Scrivener");

class Scrivener extends ScrivenerBase {
  constructor(game) {
    super(game, "Scrivener", "Tempest Remastered", "TPR");
  }
}

module.exports = Scrivener;
