"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoingDecay extends Card {
  constructor(game) {
    super(game, "Echoing Decay", "Darksteel", "DST");
  }
}

module.exports = EchoingDecay;
