"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HomaridWarriorBase = require("../setFEM/HomaridWarrior.js");

class HomaridWarrior extends HomaridWarriorBase {
  constructor(game) {
    super(game, "Homarid Warrior", "Fifth Edition", "5ED");
  }
}

module.exports = HomaridWarrior;
