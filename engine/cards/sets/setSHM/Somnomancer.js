"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Somnomancer extends Card {
  constructor(game) {
    super(game, "Somnomancer", "Shadowmoor", "SHM");
  }
}

module.exports = Somnomancer;
