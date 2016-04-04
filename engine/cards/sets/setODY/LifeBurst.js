"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifeBurst extends Card {
  constructor(game) {
    super(game, "Life Burst", "Odyssey", "ODY");
  }
}

module.exports = LifeBurst;
