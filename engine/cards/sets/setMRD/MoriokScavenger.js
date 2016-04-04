"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoriokScavenger extends Card {
  constructor(game) {
    super(game, "Moriok Scavenger", "Mirrodin", "MRD");
  }
}

module.exports = MoriokScavenger;
