"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stonefury extends Card {
  constructor(game) {
    super(game, "Stonefury", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Stonefury;
