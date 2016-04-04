"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantStand extends Card {
  constructor(game) {
    super(game, "Defiant Stand", "Portal", "POR");
  }
}

module.exports = DefiantStand;
