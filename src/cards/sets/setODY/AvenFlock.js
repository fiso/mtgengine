"use strict";
const Constants = require ("../../../Constants");
const AvenFlockBase = require("../set8ED/AvenFlock");

class AvenFlock extends AvenFlockBase {
  constructor (game) {
    super(game, "Aven Flock", "Odyssey", "ODY");
  }
}

module.exports = AvenFlock;
