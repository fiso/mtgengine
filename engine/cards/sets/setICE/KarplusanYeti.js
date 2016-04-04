"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarplusanYeti extends Card {
  constructor(game) {
    super(game, "Karplusan Yeti", "Ice Age", "ICE");
  }
}

module.exports = KarplusanYeti;
