"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyknite extends Card {
  constructor(game) {
    super(game, "Pyknite", "Ice Age", "ICE");
  }
}

module.exports = Pyknite;
