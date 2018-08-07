"use strict";
const Constants = require ("../../../Constants");
const WurmsToothBase = require("../setM12/WurmsTooth");

class WurmsTooth extends WurmsToothBase {
  constructor (game) {
    super(game, "Wurm's Tooth", "Darksteel", "DST");
  }
}

module.exports = WurmsTooth;
