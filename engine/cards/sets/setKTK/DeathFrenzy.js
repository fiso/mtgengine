"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathFrenzy extends Card {
  constructor(game) {
    super(game, "Death Frenzy", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeathFrenzy;
