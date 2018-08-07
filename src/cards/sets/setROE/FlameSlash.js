"use strict";
const Constants = require ("../../../Constants");
const FlameSlashBase = require("../setCN2/FlameSlash");

class FlameSlash extends FlameSlashBase {
  constructor (game) {
    super(game, "Flame Slash", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = FlameSlash;
