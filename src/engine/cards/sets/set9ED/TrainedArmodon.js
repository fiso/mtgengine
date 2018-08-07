"use strict";
const Constants = require ("../../../Constants");
const TrainedArmodonBase = require("../setTPR/TrainedArmodon");

class TrainedArmodon extends TrainedArmodonBase {
  constructor (game) {
    super(game, "Trained Armodon", "Ninth Edition", "9ED");
  }
}

module.exports = TrainedArmodon;
