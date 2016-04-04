"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ovinomancer extends Card {
  constructor(game) {
    super(game, "Ovinomancer", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Ovinomancer;
