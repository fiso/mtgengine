"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychicPurgeBase = require("../setLEG/PsychicPurge.js");

class PsychicPurge extends PsychicPurgeBase {
  constructor(game) {
    super(game, "Psychic Purge", "Masters Edition", "MED");
  }
}

module.exports = PsychicPurge;
