"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireAnts extends Card {
  constructor(game) {
    super(game, "Fire Ants", "Battle Royale Box Set", "BRB");
  }
}

module.exports = FireAnts;
