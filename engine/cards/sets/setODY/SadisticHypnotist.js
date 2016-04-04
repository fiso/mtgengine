"use strict";
const Constants = require ("../../../Constants");
const SadisticHypnotistBase = require("../setDDJ/SadisticHypnotist");

class SadisticHypnotist extends SadisticHypnotistBase {
  constructor(game) {
    super(game, "Sadistic Hypnotist", "Odyssey", "ODY");
  }
}

module.exports = SadisticHypnotist;
