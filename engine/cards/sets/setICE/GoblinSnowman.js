"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSnowmanBase = require("../setATH/GoblinSnowman.js");

class GoblinSnowman extends GoblinSnowmanBase {
  constructor(game) {
    super(game, "Goblin Snowman", "Ice Age", "ICE");
  }
}

module.exports = GoblinSnowman;
