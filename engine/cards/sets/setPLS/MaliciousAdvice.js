"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaliciousAdvice extends Card {
  constructor(game) {
    super(game, "Malicious Advice", "Planeshift", "PLS");
  }
}

module.exports = MaliciousAdvice;
