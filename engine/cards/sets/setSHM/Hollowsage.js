"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hollowsage extends Card {
  constructor(game) {
    super(game, "Hollowsage", "Shadowmoor", "SHM");
  }
}

module.exports = Hollowsage;
