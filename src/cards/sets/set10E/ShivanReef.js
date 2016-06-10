"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setAPC/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor (game) {
    super(game, "Shivan Reef", "Tenth Edition", "10E");
  }
}

module.exports = ShivanReef;
