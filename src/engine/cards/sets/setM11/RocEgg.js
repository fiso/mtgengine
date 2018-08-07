"use strict";
const Constants = require ("../../../Constants");
const RocEggBase = require("../setM12/RocEgg");

class RocEgg extends RocEggBase {
  constructor (game) {
    super(game, "Roc Egg", "Magic 2011", "M11");
  }
}

module.exports = RocEgg;
