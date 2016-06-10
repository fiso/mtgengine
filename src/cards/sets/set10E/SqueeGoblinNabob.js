"use strict";
const Constants = require ("../../../Constants");
const SqueeGoblinNabobBase = require("../setMMQ/SqueeGoblinNabob");

class SqueeGoblinNabob extends SqueeGoblinNabobBase {
  constructor (game) {
    super(game, "Squee, Goblin Nabob", "Tenth Edition", "10E");
  }
}

module.exports = SqueeGoblinNabob;
