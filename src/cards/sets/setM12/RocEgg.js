"use strict";
const Constants = require ("../../../Constants");
const RocEggBase = require("../setM11/RocEgg");

class RocEgg extends RocEggBase {
  constructor(game) {
    super(game, "Roc Egg", "Magic 2012", "M12");
  }
}

module.exports = RocEgg;
