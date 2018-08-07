"use strict";
const Constants = require ("../../../Constants");
const TrainedArmodonBase = require("../setTPR/TrainedArmodon");

class TrainedArmodon extends TrainedArmodonBase {
  constructor (game) {
    super(game, "Trained Armodon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TrainedArmodon;
