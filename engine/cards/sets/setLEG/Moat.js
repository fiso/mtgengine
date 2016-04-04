"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Moat extends Card {
  constructor(game) {
    super(game, "Moat", "Legends", "LEG");
  }
}

module.exports = Moat;
