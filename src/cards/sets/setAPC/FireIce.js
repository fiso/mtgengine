"use strict";
const Constants = require ("../../../Constants");
const FireIceBase = require("../setDDJ/FireIce");

class FireIce extends FireIceBase {
  constructor (game) {
    super(game, "Fire // Ice", "Apocalypse", "APC");
  }
}

module.exports = FireIce;
