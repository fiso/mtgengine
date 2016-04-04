"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticStudy extends Card {
  constructor(game) {
    super(game, "Rhystic Study", "Commander's Arsenal", "CM1");
  }
}

module.exports = RhysticStudy;
