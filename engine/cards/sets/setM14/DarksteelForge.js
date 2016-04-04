"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelForgeBase = require("../setDST/DarksteelForge.js");

class DarksteelForge extends DarksteelForgeBase {
  constructor(game) {
    super(game, "Darksteel Forge", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DarksteelForge;
