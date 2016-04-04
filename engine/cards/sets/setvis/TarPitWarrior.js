"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarPitWarriorBase = require("../setBTD/TarPitWarrior.js");

class TarPitWarrior extends TarPitWarriorBase {
  constructor(game) {
    super(game, "Tar Pit Warrior", "Visions", "VIS");
  }
}

module.exports = TarPitWarrior;
