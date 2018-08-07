"use strict";
const Constants = require ("../../../Constants");
const MysticCompassBase = require("../set6ED/MysticCompass");

class MysticCompass extends MysticCompassBase {
  constructor (game) {
    super(game, "Mystic Compass", "Alliances", "ALL");
  }
}

module.exports = MysticCompass;
