"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crevasse extends Card {
  constructor(game) {
    super(game, "Crevasse", "Legends", "LEG");
  }
}

module.exports = Crevasse;
