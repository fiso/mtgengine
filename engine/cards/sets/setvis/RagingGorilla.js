"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingGorilla extends Card {
  constructor(game) {
    super(game, "Raging Gorilla", "Visions", "VIS");
  }
}

module.exports = RagingGorilla;
