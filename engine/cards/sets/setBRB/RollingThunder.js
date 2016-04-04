"use strict";
const Constants = require ("../../../Constants");
const RollingThunderBase = require("../setBFZ/RollingThunder");

class RollingThunder extends RollingThunderBase {
  constructor(game) {
    super(game, "Rolling Thunder", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RollingThunder;
