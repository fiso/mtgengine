"use strict";
const Constants = require ("../../../Constants");
const WhiplashTrapBase = require("../setDDN/WhiplashTrap");

class WhiplashTrap extends WhiplashTrapBase {
  constructor(game) {
    super(game, "Whiplash Trap", "Zendikar", "ZEN");
  }
}

module.exports = WhiplashTrap;
