"use strict";
const Constants = require ("../../../Constants");
const PsychicPurgeBase = require("../setMED/PsychicPurge");

class PsychicPurge extends PsychicPurgeBase {
  constructor (game) {
    super(game, "Psychic Purge", "Legends", "LEG");
  }
}

module.exports = PsychicPurge;
