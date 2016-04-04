"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Meddle extends Card {
  constructor(game) {
    super(game, "Meddle", "Mirage", "MIR");
  }
}

module.exports = Meddle;
