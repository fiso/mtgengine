"use strict";
const Constants = require ("../../../Constants");
const LashOutBase = require("../setCMD/LashOut");

class LashOut extends LashOutBase {
  constructor (game) {
    super(game, "Lash Out", "Lorwyn", "LRW");
  }
}

module.exports = LashOut;
