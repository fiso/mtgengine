"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameSlashBase = require("../setDDK/FlameSlash.js");

class FlameSlash extends FlameSlashBase {
  constructor(game) {
    super(game, "Flame Slash", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = FlameSlash;
