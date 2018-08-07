"use strict";
const Constants = require ("../../../Constants");
const AvenFlockBase = require("../set9ED/AvenFlock");

class AvenFlock extends AvenFlockBase {
  constructor (game) {
    super(game, "Aven Flock", "Eighth Edition", "8ED");
  }
}

module.exports = AvenFlock;
