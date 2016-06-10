"use strict";
const Constants = require ("../../../Constants");
const MysticCompassBase = require("../setALL/MysticCompass");

class MysticCompass extends MysticCompassBase {
  constructor (game) {
    super(game, "Mystic Compass", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticCompass;
