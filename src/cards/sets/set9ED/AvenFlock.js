"use strict";
const Constants = require ("../../../Constants");
const AvenFlockBase = require("../set8ED/AvenFlock");

class AvenFlock extends AvenFlockBase {
  constructor (game) {
    super(game, "Aven Flock", "Ninth Edition", "9ED");
  }
}

module.exports = AvenFlock;
