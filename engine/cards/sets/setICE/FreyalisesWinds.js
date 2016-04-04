"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreyalisesWinds extends Card {
  constructor(game) {
    super(game, "Freyalise's Winds", "Ice Age", "ICE");
  }
}

module.exports = FreyalisesWinds;
