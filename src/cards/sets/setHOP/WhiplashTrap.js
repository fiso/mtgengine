"use strict";
const Constants = require ("../../../Constants");
const WhiplashTrapBase = require("../setDDN/WhiplashTrap");

class WhiplashTrap extends WhiplashTrapBase {
  constructor (game) {
    super(game, "Whiplash Trap", "Planechase", "HOP");
  }
}

module.exports = WhiplashTrap;
