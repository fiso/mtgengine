"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasteroftheHunt extends Card {
  constructor(game) {
    super(game, "Master of the Hunt", "Legends", "LEG");
  }
}

module.exports = MasteroftheHunt;
