"use strict";
const Constants = require ("../../../Constants");
const FlameJabBase = require("../setEMA/FlameJab");

class FlameJab extends FlameJabBase {
  constructor (game) {
    super(game, "Flame Jab", "Eventide", "EVE");
  }
}

module.exports = FlameJab;
