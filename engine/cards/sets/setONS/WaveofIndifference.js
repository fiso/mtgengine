"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaveofIndifference extends Card {
  constructor(game) {
    super(game, "Wave of Indifference", "Onslaught", "ONS");
  }
}

module.exports = WaveofIndifference;
