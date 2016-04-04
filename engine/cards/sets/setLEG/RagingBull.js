"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingBull extends Card {
  constructor(game) {
    super(game, "Raging Bull", "Legends", "LEG");
  }
}

module.exports = RagingBull;
