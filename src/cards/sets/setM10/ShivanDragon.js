"use strict";
const Constants = require ("../../../Constants");
const ShivanDragonBase = require("../setBTD/ShivanDragon");

class ShivanDragon extends ShivanDragonBase {
  constructor (game) {
    super(game, "Shivan Dragon", "Magic 2010", "M10");
  }
}

module.exports = ShivanDragon;
