"use strict";
const Constants = require ("../../../Constants");
const StalwartAvenBase = require("../setIMA/StalwartAven");

class StalwartAven extends StalwartAvenBase {
  constructor (game) {
    super(game, "Stalwart Aven", "Magic Origins", "ORI");
  }
}

module.exports = StalwartAven;
