"use strict";
const Constants = require ("../../../Constants");
const TuktuktheExplorerBase = require("../setCM2/TuktuktheExplorer");

class TuktuktheExplorer extends TuktuktheExplorerBase {
  constructor (game) {
    super(game, "Tuktuk the Explorer", "Commander 2014", "C14");
  }
}

module.exports = TuktuktheExplorer;
