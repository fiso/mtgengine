"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ColosYearling extends Card {
  constructor(game) {
    super(game, "Colos Yearling", "Urza's Destiny", "UDS");
  }
}

module.exports = ColosYearling;
