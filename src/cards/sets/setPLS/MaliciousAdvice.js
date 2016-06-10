"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaliciousAdvice extends UnimplementedCard {
  constructor (game) {
    super(game, "Malicious Advice", "Planeshift", "PLS");
  }
}

module.exports = MaliciousAdvice;
