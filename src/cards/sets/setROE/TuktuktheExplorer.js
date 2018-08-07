"use strict";
const Constants = require ("../../../Constants");
const TuktuktheExplorerBase = require("../setCM2/TuktuktheExplorer");

class TuktuktheExplorer extends TuktuktheExplorerBase {
  constructor (game) {
    super(game, "Tuktuk the Explorer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TuktuktheExplorer;
