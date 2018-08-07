"use strict";
const Constants = require ("../../../Constants");
const DireFleetPoisonerBase = require("../setPRIX/DireFleetPoisoner");

class DireFleetPoisoner extends DireFleetPoisonerBase {
  constructor (game) {
    super(game, "Dire Fleet Poisoner", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DireFleetPoisoner;
