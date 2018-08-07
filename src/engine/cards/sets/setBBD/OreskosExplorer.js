"use strict";
const Constants = require ("../../../Constants");
const OreskosExplorerBase = require("../setCM2/OreskosExplorer");

class OreskosExplorer extends OreskosExplorerBase {
  constructor (game) {
    super(game, "Oreskos Explorer", "Battlebond", "BBD");
  }
}

module.exports = OreskosExplorer;
