"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rebound extends Card {
  constructor(game) {
    super(game, "Rebound", "Stronghold", "STH");
  }
}

module.exports = Rebound;
