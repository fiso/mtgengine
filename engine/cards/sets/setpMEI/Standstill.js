"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Standstill extends Card {
  constructor(game) {
    super(game, "Standstill", "Media Inserts", "pMEI");
  }
}

module.exports = Standstill;
