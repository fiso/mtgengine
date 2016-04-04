"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RollingThunderBase = require("../setBFZ/RollingThunder.js");

class RollingThunder extends RollingThunderBase {
  constructor(game) {
    super(game, "Rolling Thunder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RollingThunder;
