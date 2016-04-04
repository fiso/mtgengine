"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineLight extends Card {
  constructor(game) {
    super(game, "Divine Light", "Apocalypse", "APC");
  }
}

module.exports = DivineLight;
