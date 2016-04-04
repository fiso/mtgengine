"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuirionSentinel extends Card {
  constructor(game) {
    super(game, "Quirion Sentinel", "Invasion", "INV");
  }
}

module.exports = QuirionSentinel;
