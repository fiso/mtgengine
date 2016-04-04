"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamCoat extends Card {
  constructor(game) {
    super(game, "Dream Coat", "Legends", "LEG");
  }
}

module.exports = DreamCoat;
