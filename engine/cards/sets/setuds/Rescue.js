"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rescue extends Card {
  constructor(game) {
    super(game, "Rescue", "Urza's Destiny", "UDS");
  }
}

module.exports = Rescue;
