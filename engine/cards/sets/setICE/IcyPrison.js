"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcyPrison extends Card {
  constructor(game) {
    super(game, "Icy Prison", "Ice Age", "ICE");
  }
}

module.exports = IcyPrison;
