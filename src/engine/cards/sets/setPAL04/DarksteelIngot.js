"use strict";
const Constants = require ("../../../Constants");
const DarksteelIngotBase = require("../setCM2/DarksteelIngot");

class DarksteelIngot extends DarksteelIngotBase {
  constructor (game) {
    super(game, "Darksteel Ingot", "Arena League 2004", "PAL04");
  }
}

module.exports = DarksteelIngot;
