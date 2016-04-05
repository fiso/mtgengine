"use strict";
const Constants = require ("../../../Constants");
const WurmsToothBase = require("../setDST/WurmsTooth");

class WurmsTooth extends WurmsToothBase {
  constructor(game) {
    super(game, "Wurm's Tooth", "Ninth Edition", "9ED");
  }
}

module.exports = WurmsTooth;
