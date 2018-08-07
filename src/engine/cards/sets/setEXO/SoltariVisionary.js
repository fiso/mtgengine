"use strict";
const Constants = require ("../../../Constants");
const SoltariVisionaryBase = require("../setWC98/SoltariVisionary");

class SoltariVisionary extends SoltariVisionaryBase {
  constructor (game) {
    super(game, "Soltari Visionary", "Exodus", "EXO");
  }
}

module.exports = SoltariVisionary;
