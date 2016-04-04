"use strict";
const Constants = require ("../../../Constants");
const TrainofThoughtBase = require("../setDDJ/TrainofThought");

class TrainofThought extends TrainofThoughtBase {
  constructor(game) {
    super(game, "Train of Thought", "Guildpact", "GPT");
  }
}

module.exports = TrainofThought;
