"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageKnuckleblade extends Card {
  constructor(game) {
    super(game, "Savage Knuckleblade", "Khans of Tarkir", "KTK");
  }
}

module.exports = SavageKnuckleblade;
