"use strict";
const Constants = require ("../../../Constants");
const DingusEggBase = require("../set8ED/DingusEgg");

class DingusEgg extends DingusEggBase {
  constructor (game) {
    super(game, "Dingus Egg", "Fifth Edition", "5ED");
  }
}

module.exports = DingusEgg;
