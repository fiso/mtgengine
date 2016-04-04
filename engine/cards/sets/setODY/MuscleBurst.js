"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MuscleBurst extends Card {
  constructor(game) {
    super(game, "Muscle Burst", "Odyssey", "ODY");
  }
}

module.exports = MuscleBurst;
