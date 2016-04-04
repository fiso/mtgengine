"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Arboria extends Card {
  constructor(game) {
    super(game, "Arboria", "Legends", "LEG");
  }
}

module.exports = Arboria;
