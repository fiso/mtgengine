"use strict";
const Constants = require ("../../../Constants");
const ShivanReefBase = require("../setAPC/ShivanReef");

class ShivanReef extends ShivanReefBase {
  constructor (game) {
    super(game, "Shivan Reef", "Ninth Edition", "9ED");
  }
}

module.exports = ShivanReef;
