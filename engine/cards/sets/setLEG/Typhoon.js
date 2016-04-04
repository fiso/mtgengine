"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Typhoon extends Card {
  constructor(game) {
    super(game, "Typhoon", "Legends", "LEG");
  }
}

module.exports = Typhoon;
