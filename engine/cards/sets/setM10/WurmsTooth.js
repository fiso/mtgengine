"use strict";
const Constants = require ("../../../Constants");
const WurmsToothBase = require("../setDST/WurmsTooth");

class WurmsTooth extends WurmsToothBase {
  constructor(game) {
    super(game, "Wurm's Tooth", "Magic 2010", "M10");
  }
}

module.exports = WurmsTooth;
