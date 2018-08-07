"use strict";
const Constants = require ("../../../Constants");
const WurmsToothBase = require("../setM12/WurmsTooth");

class WurmsTooth extends WurmsToothBase {
  constructor (game) {
    super(game, "Wurm's Tooth", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = WurmsTooth;
