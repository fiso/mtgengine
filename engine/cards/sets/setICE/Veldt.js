"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Veldt extends Card {
  constructor(game) {
    super(game, "Veldt", "Ice Age", "ICE");
  }
}

module.exports = Veldt;
