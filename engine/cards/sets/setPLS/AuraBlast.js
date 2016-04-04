"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraBlast extends Card {
  constructor(game) {
    super(game, "Aura Blast", "Planeshift", "PLS");
  }
}

module.exports = AuraBlast;
