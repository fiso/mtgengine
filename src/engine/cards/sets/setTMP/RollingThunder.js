"use strict";
const Constants = require ("../../../Constants");
const RollingThunderBase = require("../setBFZ/RollingThunder");

class RollingThunder extends RollingThunderBase {
  constructor (game) {
    super(game, "Rolling Thunder", "Tempest", "TMP");
  }
}

module.exports = RollingThunder;
