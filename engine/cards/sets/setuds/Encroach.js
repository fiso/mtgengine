"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Encroach extends Card {
  constructor(game) {
    super(game, "Encroach", "Urza's Destiny", "UDS");
  }
}

module.exports = Encroach;
