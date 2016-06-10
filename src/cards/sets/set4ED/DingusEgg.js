"use strict";
const Constants = require ("../../../Constants");
const DingusEggBase = require("../set6ED/DingusEgg");

class DingusEgg extends DingusEggBase {
  constructor (game) {
    super(game, "Dingus Egg", "Fourth Edition", "4ED");
  }
}

module.exports = DingusEgg;
