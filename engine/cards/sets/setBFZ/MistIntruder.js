"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistIntruder extends Card {
  constructor(game) {
    super(game, "Mist Intruder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MistIntruder;
