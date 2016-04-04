"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dispel extends Card {
  constructor(game) {
    super(game, "Dispel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Dispel;
