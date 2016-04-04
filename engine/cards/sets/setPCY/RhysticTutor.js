"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticTutor extends Card {
  constructor(game) {
    super(game, "Rhystic Tutor", "Prophecy", "PCY");
  }
}

module.exports = RhysticTutor;
