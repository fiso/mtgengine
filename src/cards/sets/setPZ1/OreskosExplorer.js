"use strict";
const Constants = require ("../../../Constants");
const OreskosExplorerBase = require("../setCM2/OreskosExplorer");

class OreskosExplorer extends OreskosExplorerBase {
  constructor (game) {
    super(game, "Oreskos Explorer", "Legendary Cube", "PZ1");
  }
}

module.exports = OreskosExplorer;
