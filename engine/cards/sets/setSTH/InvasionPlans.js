"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvasionPlans extends Card {
  constructor(game) {
    super(game, "Invasion Plans", "Stronghold", "STH");
  }
}

module.exports = InvasionPlans;
