"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RabidRats extends Card {
  constructor(game) {
    super(game, "Rabid Rats", "Stronghold", "STH");
  }
}

module.exports = RabidRats;
