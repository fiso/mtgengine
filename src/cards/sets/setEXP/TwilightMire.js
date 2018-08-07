"use strict";
const Constants = require ("../../../Constants");
const TwilightMireBase = require("../setA25/TwilightMire");

class TwilightMire extends TwilightMireBase {
  constructor (game) {
    super(game, "Twilight Mire", "Zendikar Expeditions", "EXP");
  }
}

module.exports = TwilightMire;
