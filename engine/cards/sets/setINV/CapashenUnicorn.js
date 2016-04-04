"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapashenUnicorn extends Card {
  constructor(game) {
    super(game, "Capashen Unicorn", "Invasion", "INV");
  }
}

module.exports = CapashenUnicorn;
