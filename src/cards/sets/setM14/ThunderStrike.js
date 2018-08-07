"use strict";
const Constants = require ("../../../Constants");
const ThunderStrikeBase = require("../setBBD/ThunderStrike");

class ThunderStrike extends ThunderStrikeBase {
  constructor (game) {
    super(game, "Thunder Strike", "Magic 2014", "M14");
  }
}

module.exports = ThunderStrike;
