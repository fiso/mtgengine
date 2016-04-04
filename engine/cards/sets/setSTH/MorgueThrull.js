"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorgueThrull extends Card {
  constructor(game) {
    super(game, "Morgue Thrull", "Stronghold", "STH");
  }
}

module.exports = MorgueThrull;
