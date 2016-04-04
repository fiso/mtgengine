"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrainedArmodonBase = require("../set6ED/TrainedArmodon.js");

class TrainedArmodon extends TrainedArmodonBase {
  constructor(game) {
    super(game, "Trained Armodon", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TrainedArmodon;
