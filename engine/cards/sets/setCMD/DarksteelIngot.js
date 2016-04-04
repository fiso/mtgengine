"use strict";
const Constants = require ("../../../Constants");
const DarksteelIngotBase = require("../setpARL/DarksteelIngot");

class DarksteelIngot extends DarksteelIngotBase {
  constructor(game) {
    super(game, "Darksteel Ingot", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DarksteelIngot;
