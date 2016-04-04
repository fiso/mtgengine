"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeSoldier extends Card {
  constructor(game) {
    super(game, "Spike Soldier", "Stronghold", "STH");
  }
}

module.exports = SpikeSoldier;
