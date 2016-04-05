"use strict";
const Constants = require ("../../../Constants");
const LavaHoundsBase = require("../set8ED/LavaHounds");

class LavaHounds extends LavaHoundsBase {
  constructor(game) {
    super(game, "Lava Hounds", "Weatherlight", "WTH");
  }
}

module.exports = LavaHounds;
