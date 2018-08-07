"use strict";
const Constants = require ("../../../Constants");
const TreeofTalesBase = require("../setHOP/TreeofTales");

class TreeofTales extends TreeofTalesBase {
  constructor (game) {
    super(game, "Tree of Tales", "World Championship Decks 2004", "WC04");
  }
}

module.exports = TreeofTales;
