"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TuktuktheExplorerBase = require("../setC14/TuktuktheExplorer.js");

class TuktuktheExplorer extends TuktuktheExplorerBase {
  constructor(game) {
    super(game, "Tuktuk the Explorer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TuktuktheExplorer;
