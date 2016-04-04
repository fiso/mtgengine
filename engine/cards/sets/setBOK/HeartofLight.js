"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartofLight extends Card {
  constructor(game) {
    super(game, "Heart of Light", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartofLight;
