"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTutor extends Card {
  constructor(game) {
    super(game, "Goblin Tutor", "Unglued", "UGL");
  }
}

module.exports = GoblinTutor;
