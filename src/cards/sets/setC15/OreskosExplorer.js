"use strict";
const Constants = require ("../../../Constants");
const OreskosExplorerBase = require("../setCM2/OreskosExplorer");

class OreskosExplorer extends OreskosExplorerBase {
  constructor (game) {
    super(game, "Oreskos Explorer", "Commander 2015", "C15");
  }
}

module.exports = OreskosExplorer;
