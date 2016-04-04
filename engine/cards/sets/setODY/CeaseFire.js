"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CeaseFire extends Card {
  constructor(game) {
    super(game, "Cease-Fire", "Odyssey", "ODY");
  }
}

module.exports = CeaseFire;
