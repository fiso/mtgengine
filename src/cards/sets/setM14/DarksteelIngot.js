"use strict";
const Constants = require ("../../../Constants");
const DarksteelIngotBase = require("../setpARL/DarksteelIngot");

class DarksteelIngot extends DarksteelIngotBase {
  constructor(game) {
    super(game, "Darksteel Ingot", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DarksteelIngot;
