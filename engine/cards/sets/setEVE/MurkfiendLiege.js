"use strict";
const Constants = require ("../../../Constants");
const MurkfiendLiegeBase = require("../setC13/MurkfiendLiege");

class MurkfiendLiege extends MurkfiendLiegeBase {
  constructor(game) {
    super(game, "Murkfiend Liege", "Eventide", "EVE");
  }
}

module.exports = MurkfiendLiege;
