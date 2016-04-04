"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantVanguard extends Card {
  constructor(game) {
    super(game, "Defiant Vanguard", "Nemesis", "NMS");
  }
}

module.exports = DefiantVanguard;
