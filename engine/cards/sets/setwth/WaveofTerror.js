"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaveofTerror extends Card {
  constructor(game) {
    super(game, "Wave of Terror", "Weatherlight", "WTH");
  }
}

module.exports = WaveofTerror;
