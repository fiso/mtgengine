"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesperateResearch extends Card {
  constructor(game) {
    super(game, "Desperate Research", "Invasion", "INV");
  }
}

module.exports = DesperateResearch;
