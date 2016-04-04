"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonasteryMentor extends Card {
  constructor(game) {
    super(game, "Monastery Mentor", "Fate Reforged", "FRF");
  }
}

module.exports = MonasteryMentor;
