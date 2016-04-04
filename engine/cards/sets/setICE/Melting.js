"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Melting extends Card {
  constructor(game) {
    super(game, "Melting", "Ice Age", "ICE");
  }
}

module.exports = Melting;
