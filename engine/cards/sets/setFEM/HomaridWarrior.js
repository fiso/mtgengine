"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomaridWarrior extends Card {
  constructor(game) {
    super(game, "Homarid Warrior", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridWarrior;
