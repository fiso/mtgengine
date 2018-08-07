"use strict";
const Constants = require ("../../../Constants");
const WurmBase = require("../setTCM2/Wurm");

class Wurm extends WurmBase {
  constructor (game) {
    super(game, "Wurm", "Magic Player Rewards 2002", "PR2");
  }
}

module.exports = Wurm;
