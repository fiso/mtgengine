"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarplusanGiant extends Card {
  constructor(game) {
    super(game, "Karplusan Giant", "Ice Age", "ICE");
  }
}

module.exports = KarplusanGiant;
