"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathSpeakersBase = require("../set5ED/DeathSpeakers.js");

class DeathSpeakers extends DeathSpeakersBase {
  constructor(game) {
    super(game, "Death Speakers", "Masters Edition", "MED");
  }
}

module.exports = DeathSpeakers;
