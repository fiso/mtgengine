"use strict";
const Constants = require ("../../../Constants");
const ReefWormBase = require("../setA25/ReefWorm");

class ReefWorm extends ReefWormBase {
  constructor (game) {
    super(game, "Reef Worm", "Commander 2014", "C14");
  }
}

module.exports = ReefWorm;
