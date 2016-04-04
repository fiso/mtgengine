"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishHealer extends Card {
  constructor(game) {
    super(game, "Elvish Healer", "Ice Age", "ICE");
  }
}

module.exports = ElvishHealer;
