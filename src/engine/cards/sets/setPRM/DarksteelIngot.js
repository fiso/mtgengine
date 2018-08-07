"use strict";
const Constants = require ("../../../Constants");
const DarksteelIngotBase = require("../setCM2/DarksteelIngot");

class DarksteelIngot extends DarksteelIngotBase {
  constructor (game) {
    super(game, "Darksteel Ingot", "Magic Online Promos", "PRM");
  }
}

module.exports = DarksteelIngot;
