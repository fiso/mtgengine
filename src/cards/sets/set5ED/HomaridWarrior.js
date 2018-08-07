"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomaridWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Homarid Warrior", "Fifth Edition", "5ED");
  }
}

module.exports = HomaridWarrior;
