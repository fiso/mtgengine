"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireDrake extends Card {
  constructor(game) {
    super(game, "Fire Drake", "Chronicles", "CHR");
  }
}

module.exports = FireDrake;
