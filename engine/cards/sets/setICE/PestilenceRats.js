"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PestilenceRats extends Card {
  constructor(game) {
    super(game, "Pestilence Rats", "Ice Age", "ICE");
  }
}

module.exports = PestilenceRats;
