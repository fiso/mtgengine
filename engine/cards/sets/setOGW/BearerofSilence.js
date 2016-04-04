"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BearerofSilence extends Card {
  constructor(game) {
    super(game, "Bearer of Silence", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BearerofSilence;
