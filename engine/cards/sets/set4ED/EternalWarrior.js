"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EternalWarriorBase = require("../set5ED/EternalWarrior.js");

class EternalWarrior extends EternalWarriorBase {
  constructor(game) {
    super(game, "Eternal Warrior", "Fourth Edition", "4ED");
  }
}

module.exports = EternalWarrior;
