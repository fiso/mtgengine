"use strict";
const Constants = require ("../../../Constants");
const WardenoftheFirstTreeBase = require("../setFRF/WardenoftheFirstTree");

class WardenoftheFirstTree extends WardenoftheFirstTreeBase {
  constructor (game) {
    super(game, "Warden of the First Tree", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = WardenoftheFirstTree;
