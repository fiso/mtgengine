"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnerringSling extends Card {
  constructor(game) {
    super(game, "Unerring Sling", "Mirage", "MIR");
  }
}

module.exports = UnerringSling;
