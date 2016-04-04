"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrainofThoughtBase = require("../setDDJ/TrainofThought.js");

class TrainofThought extends TrainofThoughtBase {
  constructor(game) {
    super(game, "Train of Thought", "Guildpact", "GPT");
  }
}

module.exports = TrainofThought;
