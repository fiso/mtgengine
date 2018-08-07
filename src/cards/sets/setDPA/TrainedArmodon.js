"use strict";
const Constants = require ("../../../Constants");
const TrainedArmodonBase = require("../setTPR/TrainedArmodon");

class TrainedArmodon extends TrainedArmodonBase {
  constructor (game) {
    super(game, "Trained Armodon", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TrainedArmodon;
