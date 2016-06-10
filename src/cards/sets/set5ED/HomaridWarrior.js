"use strict";
const Constants = require ("../../../Constants");
const HomaridWarriorBase = require("../setFEM/HomaridWarrior");

class HomaridWarrior extends HomaridWarriorBase {
  constructor (game) {
    super(game, "Homarid Warrior", "Fifth Edition", "5ED");
  }
}

module.exports = HomaridWarrior;
