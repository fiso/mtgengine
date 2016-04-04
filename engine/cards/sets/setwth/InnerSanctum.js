"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InnerSanctum extends Card {
  constructor(game) {
    super(game, "Inner Sanctum", "Weatherlight", "WTH");
  }
}

module.exports = InnerSanctum;
