"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SadisticHypnotistBase = require("../setDDJ/SadisticHypnotist.js");

class SadisticHypnotist extends SadisticHypnotistBase {
  constructor(game) {
    super(game, "Sadistic Hypnotist", "Odyssey", "ODY");
  }
}

module.exports = SadisticHypnotist;
