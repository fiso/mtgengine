"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarplusanStrider extends Card {
  constructor(game) {
    super(game, "Karplusan Strider", "Coldsnap", "CSP");
  }
}

module.exports = KarplusanStrider;
