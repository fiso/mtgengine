"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RapidFire extends Card {
  constructor(game) {
    super(game, "Rapid Fire", "Legends", "LEG");
  }
}

module.exports = RapidFire;
