"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Incendiary extends Card {
  constructor(game) {
    super(game, "Incendiary", "Urza's Destiny", "UDS");
  }
}

module.exports = Incendiary;
