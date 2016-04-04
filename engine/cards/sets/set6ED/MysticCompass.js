"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticCompassBase = require("../setALL/MysticCompass.js");

class MysticCompass extends MysticCompassBase {
  constructor(game) {
    super(game, "Mystic Compass", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticCompass;
