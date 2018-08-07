"use strict";
const Constants = require ("../../../Constants");
const WingcrafterBase = require("../setMM3/Wingcrafter");

class Wingcrafter extends WingcrafterBase {
  constructor (game) {
    super(game, "Wingcrafter", "Avacyn Restored", "AVR");
  }
}

module.exports = Wingcrafter;
