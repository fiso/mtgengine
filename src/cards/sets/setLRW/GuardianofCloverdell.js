"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianofCloverdell extends UnimplementedCard {
  constructor(game) {
    super(game, "Guardian of Cloverdell", "Lorwyn", "LRW");
  }
}

module.exports = GuardianofCloverdell;
