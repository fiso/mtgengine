"use strict";
const Constants = require ("../../../Constants");
const NullRodBase = require("../setVMA/NullRod");

class NullRod extends NullRodBase {
  constructor (game) {
    super(game, "Null Rod", "Weatherlight", "WTH");
  }
}

module.exports = NullRod;
