"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MobJustice extends Card {
  constructor(game) {
    super(game, "Mob Justice", "Stronghold", "STH");
  }
}

module.exports = MobJustice;
