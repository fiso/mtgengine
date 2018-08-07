"use strict";
const Constants = require ("../../../Constants");
const DwarvenThaumaturgistBase = require("../setWC98/DwarvenThaumaturgist");

class DwarvenThaumaturgist extends DwarvenThaumaturgistBase {
  constructor (game) {
    super(game, "Dwarven Thaumaturgist", "Weatherlight", "WTH");
  }
}

module.exports = DwarvenThaumaturgist;
