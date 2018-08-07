"use strict";
const Constants = require ("../../../Constants");
const SmashBase = require("../set10E/Smash");

class Smash extends SmashBase {
  constructor (game) {
    super(game, "Smash", "Apocalypse", "APC");
  }
}

module.exports = Smash;
