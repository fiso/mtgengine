"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetathranSoldier extends Card {
  constructor(game) {
    super(game, "Metathran Soldier", "Urza's Destiny", "UDS");
  }
}

module.exports = MetathranSoldier;
