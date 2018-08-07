"use strict";
const Constants = require ("../../../Constants");
const ScuteMobBase = require("../setC18/ScuteMob");

class ScuteMob extends ScuteMobBase {
  constructor (game) {
    super(game, "Scute Mob", "Zendikar", "ZEN");
  }
}

module.exports = ScuteMob;
