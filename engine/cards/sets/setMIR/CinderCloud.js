"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderCloud extends Card {
  constructor(game) {
    super(game, "Cinder Cloud", "Mirage", "MIR");
  }
}

module.exports = CinderCloud;
