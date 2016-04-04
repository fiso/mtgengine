"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarChariot extends Card {
  constructor(game) {
    super(game, "War Chariot", "Ice Age", "ICE");
  }
}

module.exports = WarChariot;
