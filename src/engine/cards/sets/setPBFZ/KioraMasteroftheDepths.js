"use strict";
const Constants = require ("../../../Constants");
const KioraMasteroftheDepthsBase = require("../setBFZ/KioraMasteroftheDepths");

class KioraMasteroftheDepths extends KioraMasteroftheDepthsBase {
  constructor (game) {
    super(game, "Kiora, Master of the Depths", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = KioraMasteroftheDepths;
