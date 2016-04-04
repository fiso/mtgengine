"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Quagmire extends Card {
  constructor(game) {
    super(game, "Quagmire", "Legends", "LEG");
  }
}

module.exports = Quagmire;
