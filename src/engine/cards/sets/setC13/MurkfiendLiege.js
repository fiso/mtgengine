"use strict";
const Constants = require ("../../../Constants");
const MurkfiendLiegeBase = require("../setCMA/MurkfiendLiege");

class MurkfiendLiege extends MurkfiendLiegeBase {
  constructor (game) {
    super(game, "Murkfiend Liege", "Commander 2013", "C13");
  }
}

module.exports = MurkfiendLiege;
