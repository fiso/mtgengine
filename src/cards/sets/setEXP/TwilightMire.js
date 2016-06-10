"use strict";
const Constants = require ("../../../Constants");
const TwilightMireBase = require("../setEVE/TwilightMire");

class TwilightMire extends TwilightMireBase {
  constructor (game) {
    super(game, "Twilight Mire", "Zendikar Expedition", "EXP");
  }
}

module.exports = TwilightMire;
