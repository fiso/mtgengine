"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomaridWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Homarid Warrior", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridWarrior;
