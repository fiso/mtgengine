"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Delirium extends Card {
  constructor(game) {
    super(game, "Delirium", "Mirage", "MIR");
  }
}

module.exports = Delirium;
