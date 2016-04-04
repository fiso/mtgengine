"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingDestiny extends Card {
  constructor(game) {
    super(game, "Living Destiny", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LivingDestiny;
