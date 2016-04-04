"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Halfdane extends Card {
  constructor(game) {
    super(game, "Halfdane", "Legends", "LEG");
  }
}

module.exports = Halfdane;
