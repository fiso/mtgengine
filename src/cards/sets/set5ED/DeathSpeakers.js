"use strict";
const Constants = require ("../../../Constants");
const DeathSpeakersBase = require("../setMED/DeathSpeakers");

class DeathSpeakers extends DeathSpeakersBase {
  constructor (game) {
    super(game, "Death Speakers", "Fifth Edition", "5ED");
  }
}

module.exports = DeathSpeakers;
