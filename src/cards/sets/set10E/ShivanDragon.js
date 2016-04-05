"use strict";
const Constants = require ("../../../Constants");
const ShivanDragonBase = require("../setBTD/ShivanDragon");

class ShivanDragon extends ShivanDragonBase {
  constructor(game) {
    super(game, "Shivan Dragon", "Tenth Edition", "10E");
  }
}

module.exports = ShivanDragon;
