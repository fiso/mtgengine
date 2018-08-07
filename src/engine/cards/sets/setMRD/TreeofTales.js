"use strict";
const Constants = require ("../../../Constants");
const TreeofTalesBase = require("../setHOP/TreeofTales");

class TreeofTales extends TreeofTalesBase {
  constructor (game) {
    super(game, "Tree of Tales", "Mirrodin", "MRD");
  }
}

module.exports = TreeofTales;
