"use strict";
const Constants = require ("../../../Constants");
const ShivanDragonBase = require("../setM19/ShivanDragon");

class ShivanDragon extends ShivanDragonBase {
  constructor (game) {
    super(game, "Shivan Dragon", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ShivanDragon;
