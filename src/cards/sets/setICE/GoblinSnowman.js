"use strict";
const Constants = require ("../../../Constants");
const GoblinSnowmanBase = require("../setATH/GoblinSnowman");

class GoblinSnowman extends GoblinSnowmanBase {
  constructor(game) {
    super(game, "Goblin Snowman", "Ice Age", "ICE");
  }
}

module.exports = GoblinSnowman;
