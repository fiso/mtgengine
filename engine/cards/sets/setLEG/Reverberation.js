"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reverberation extends Card {
  constructor(game) {
    super(game, "Reverberation", "Legends", "LEG");
  }
}

module.exports = Reverberation;
