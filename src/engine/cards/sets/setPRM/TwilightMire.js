"use strict";
const Constants = require ("../../../Constants");
const TwilightMireBase = require("../setA25/TwilightMire");

class TwilightMire extends TwilightMireBase {
  constructor (game) {
    super(game, "Twilight Mire", "Magic Online Promos", "PRM");
  }
}

module.exports = TwilightMire;
