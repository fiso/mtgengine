"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurnAside extends Card {
  constructor(game) {
    super(game, "Turn Aside", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TurnAside;
