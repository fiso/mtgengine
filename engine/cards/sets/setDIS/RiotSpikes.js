"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiotSpikes extends Card {
  constructor(game) {
    super(game, "Riot Spikes", "Dissension", "DIS");
  }
}

module.exports = RiotSpikes;
