"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlipstreamEel extends Card {
  constructor(game) {
    super(game, "Slipstream Eel", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SlipstreamEel;
