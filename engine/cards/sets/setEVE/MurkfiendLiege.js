"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurkfiendLiegeBase = require("../setC13/MurkfiendLiege.js");

class MurkfiendLiege extends MurkfiendLiegeBase {
  constructor(game) {
    super(game, "Murkfiend Liege", "Eventide", "EVE");
  }
}

module.exports = MurkfiendLiege;
