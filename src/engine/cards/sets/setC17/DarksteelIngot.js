"use strict";
const Constants = require ("../../../Constants");
const DarksteelIngotBase = require("../setCM2/DarksteelIngot");

class DarksteelIngot extends DarksteelIngotBase {
  constructor (game) {
    super(game, "Darksteel Ingot", "Commander 2017", "C17");
  }
}

module.exports = DarksteelIngot;
