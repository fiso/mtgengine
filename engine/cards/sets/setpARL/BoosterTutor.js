"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoosterTutor extends Card {
  constructor(game) {
    super(game, "Booster Tutor", "Arena League", "pARL");
  }
}

module.exports = BoosterTutor;
