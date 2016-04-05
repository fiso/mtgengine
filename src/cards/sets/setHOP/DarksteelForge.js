"use strict";
const Constants = require ("../../../Constants");
const DarksteelForgeBase = require("../setDST/DarksteelForge");

class DarksteelForge extends DarksteelForgeBase {
  constructor(game) {
    super(game, "Darksteel Forge", "Planechase", "HOP");
  }
}

module.exports = DarksteelForge;
