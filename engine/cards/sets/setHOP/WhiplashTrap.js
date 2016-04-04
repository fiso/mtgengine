"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiplashTrapBase = require("../setDDN/WhiplashTrap.js");

class WhiplashTrap extends WhiplashTrapBase {
  constructor(game) {
    super(game, "Whiplash Trap", "Planechase", "HOP");
  }
}

module.exports = WhiplashTrap;
