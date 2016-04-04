"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinalParasite extends Card {
  constructor(game) {
    super(game, "Spinal Parasite", "Fifth Dawn", "5DN");
  }
}

module.exports = SpinalParasite;
