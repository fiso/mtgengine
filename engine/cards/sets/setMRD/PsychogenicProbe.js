"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychogenicProbe extends Card {
  constructor(game) {
    super(game, "Psychogenic Probe", "Mirrodin", "MRD");
  }
}

module.exports = PsychogenicProbe;
