"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScuteMobBase = require("../setDDP/ScuteMob.js");

class ScuteMob extends ScuteMobBase {
  constructor(game) {
    super(game, "Scute Mob", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ScuteMob;
