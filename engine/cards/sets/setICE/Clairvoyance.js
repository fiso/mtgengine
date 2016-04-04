"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Clairvoyance extends Card {
  constructor(game) {
    super(game, "Clairvoyance", "Ice Age", "ICE");
  }
}

module.exports = Clairvoyance;
