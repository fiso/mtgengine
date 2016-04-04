"use strict";
const Constants = require ("../../../Constants");
const DeathSpeakersBase = require("../set5ED/DeathSpeakers");

class DeathSpeakers extends DeathSpeakersBase {
  constructor(game) {
    super(game, "Death Speakers", "Masters Edition", "MED");
  }
}

module.exports = DeathSpeakers;
