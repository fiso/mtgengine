"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Execute extends Card {
  constructor(game) {
    super(game, "Execute", "Eighth Edition", "8ED");
  }
}

module.exports = Execute;
