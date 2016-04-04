"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanDragonBase = require("../setBTD/ShivanDragon.js");

class ShivanDragon extends ShivanDragonBase {
  constructor(game) {
    super(game, "Shivan Dragon", "Magic Origins", "ORI");
  }
}

module.exports = ShivanDragon;
