"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FightingDrake extends Card {
  constructor(game) {
    super(game, "Fighting Drake", "Eighth Edition", "8ED");
  }
}

module.exports = FightingDrake;
