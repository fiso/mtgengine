"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Backdraft extends Card {
  constructor(game) {
    super(game, "Backdraft", "Legends", "LEG");
  }
}

module.exports = Backdraft;
