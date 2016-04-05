"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychogenicProbe extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychogenic Probe", "Mirrodin", "MRD");
  }
}

module.exports = PsychogenicProbe;
