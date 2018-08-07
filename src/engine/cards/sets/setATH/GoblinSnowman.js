"use strict";
const Constants = require ("../../../Constants");
const GoblinSnowmanBase = require("../setTSB/GoblinSnowman");

class GoblinSnowman extends GoblinSnowmanBase {
  constructor (game) {
    super(game, "Goblin Snowman", "Anthologies", "ATH");
  }
}

module.exports = GoblinSnowman;
