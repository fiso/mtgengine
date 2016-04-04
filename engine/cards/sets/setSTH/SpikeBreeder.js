"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeBreeder extends Card {
  constructor(game) {
    super(game, "Spike Breeder", "Stronghold", "STH");
  }
}

module.exports = SpikeBreeder;
