"use strict";
const Constants = require ("../../../Constants");
const SqueeGoblinNabobBase = require("../setMMA/SqueeGoblinNabob");

class SqueeGoblinNabob extends SqueeGoblinNabobBase {
  constructor (game) {
    super(game, "Squee, Goblin Nabob", "Mercadian Masques", "MMQ");
  }
}

module.exports = SqueeGoblinNabob;
