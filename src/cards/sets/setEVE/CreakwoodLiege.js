"use strict";
const Constants = require ("../../../Constants");
const CreakwoodLiegeBase = require("../setMM2/CreakwoodLiege");

class CreakwoodLiege extends CreakwoodLiegeBase {
  constructor (game) {
    super(game, "Creakwood Liege", "Eventide", "EVE");
  }
}

module.exports = CreakwoodLiege;
