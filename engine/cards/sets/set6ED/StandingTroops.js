"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandingTroops extends Card {
  constructor(game) {
    super(game, "Standing Troops", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StandingTroops;
