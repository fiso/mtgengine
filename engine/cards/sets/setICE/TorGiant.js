"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorGiant extends Card {
  constructor(game) {
    super(game, "Tor Giant", "Ice Age", "ICE");
  }
}

module.exports = TorGiant;
