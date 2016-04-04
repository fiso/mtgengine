"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Simple extends Card {
  constructor(game) {
    super(game, "Simple", "Dissension", "DIS");
  }
}

module.exports = Simple;
