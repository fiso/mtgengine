"use strict";
const Constants = require ("../../../Constants");
const TrainedArmodonBase = require("../set6ED/TrainedArmodon");

class TrainedArmodon extends TrainedArmodonBase {
  constructor(game) {
    super(game, "Trained Armodon", "Tempest", "TMP");
  }
}

module.exports = TrainedArmodon;
