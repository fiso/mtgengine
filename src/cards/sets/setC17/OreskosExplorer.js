"use strict";
const Constants = require ("../../../Constants");
const OreskosExplorerBase = require("../setCM2/OreskosExplorer");

class OreskosExplorer extends OreskosExplorerBase {
  constructor (game) {
    super(game, "Oreskos Explorer", "Commander 2017", "C17");
  }
}

module.exports = OreskosExplorer;
