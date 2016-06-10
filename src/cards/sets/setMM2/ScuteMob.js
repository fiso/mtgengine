"use strict";
const Constants = require ("../../../Constants");
const ScuteMobBase = require("../setDDP/ScuteMob");

class ScuteMob extends ScuteMobBase {
  constructor (game) {
    super(game, "Scute Mob", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ScuteMob;
