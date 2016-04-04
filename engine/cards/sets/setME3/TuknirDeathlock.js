"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TuknirDeathlockBase = require("../setLEG/TuknirDeathlock.js");

class TuknirDeathlock extends TuknirDeathlockBase {
  constructor(game) {
    super(game, "Tuknir Deathlock", "Masters Edition III", "ME3");
  }
}

module.exports = TuknirDeathlock;
