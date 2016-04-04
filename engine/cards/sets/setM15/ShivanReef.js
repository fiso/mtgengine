"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanReefBase = require("../setAPC/ShivanReef.js");

class ShivanReef extends ShivanReefBase {
  constructor(game) {
    super(game, "Shivan Reef", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ShivanReef;
