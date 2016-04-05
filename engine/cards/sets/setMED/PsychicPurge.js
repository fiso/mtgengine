"use strict";
const Constants = require ("../../../Constants");
const PsychicPurgeBase = require("../setLEG/PsychicPurge");

class PsychicPurge extends PsychicPurgeBase {
  constructor(game) {
    super(game, "Psychic Purge", "Masters Edition", "MED");
  }
}

module.exports = PsychicPurge;
