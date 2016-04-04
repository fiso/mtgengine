"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Contemplation extends Card {
  constructor(game) {
    super(game, "Contemplation", "Stronghold", "STH");
  }
}

module.exports = Contemplation;
