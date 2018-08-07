"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiotSpikes extends UnimplementedCard {
  constructor (game) {
    super(game, "Riot Spikes", "Dissension", "DIS");
  }
}

module.exports = RiotSpikes;
