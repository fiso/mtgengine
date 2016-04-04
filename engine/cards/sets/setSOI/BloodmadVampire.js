"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodmadVampire extends Card {
  constructor(game) {
    super(game, "Bloodmad Vampire", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BloodmadVampire;
