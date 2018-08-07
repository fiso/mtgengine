"use strict";
const Constants = require ("../../../Constants");
const BorosReckonerBase = require("../setMM3/BorosReckoner");

class BorosReckoner extends BorosReckonerBase {
  constructor (game) {
    super(game, "Boros Reckoner", "Gatecrash", "GTC");
  }
}

module.exports = BorosReckoner;
