"use strict";
const Constants = require ("../../../Constants");
const TreeofTalesBase = require("../setMRD/TreeofTales");

class TreeofTales extends TreeofTalesBase {
  constructor(game) {
    super(game, "Tree of Tales", "Planechase", "HOP");
  }
}

module.exports = TreeofTales;
