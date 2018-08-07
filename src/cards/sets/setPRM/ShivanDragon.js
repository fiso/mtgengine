"use strict";
const Constants = require ("../../../Constants");
const ShivanDragonBase = require("../setM19/ShivanDragon");

class ShivanDragon extends ShivanDragonBase {
  constructor (game) {
    super(game, "Shivan Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = ShivanDragon;
