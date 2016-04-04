"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RocEggBase = require("../setM11/RocEgg.js");

class RocEgg extends RocEggBase {
  constructor(game) {
    super(game, "Roc Egg", "Magic 2012", "M12");
  }
}

module.exports = RocEgg;
