"use strict";
const Constants = require ("../../../Constants");
const WurmsToothBase = require("../setDST/WurmsTooth");

class WurmsTooth extends WurmsToothBase {
  constructor (game) {
    super(game, "Wurm's Tooth", "Magic 2011", "M11");
  }
}

module.exports = WurmsTooth;
