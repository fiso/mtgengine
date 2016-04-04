"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheHippodrome extends Card {
  constructor(game) {
    super(game, "The Hippodrome", "Planechase", "HOP");
  }
}

module.exports = TheHippodrome;
