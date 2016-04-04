"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalonTrooper extends Card {
  constructor(game) {
    super(game, "Talon Trooper", "Alara Reborn", "ARB");
  }
}

module.exports = TalonTrooper;
