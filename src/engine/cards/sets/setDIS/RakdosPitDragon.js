"use strict";
const Constants = require ("../../../Constants");
const RakdosPitDragonBase = require("../setJVC/RakdosPitDragon");

class RakdosPitDragon extends RakdosPitDragonBase {
  constructor (game) {
    super(game, "Rakdos Pit Dragon", "Dissension", "DIS");
  }
}

module.exports = RakdosPitDragon;
