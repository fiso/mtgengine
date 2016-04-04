"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticCircle extends Card {
  constructor(game) {
    super(game, "Rhystic Circle", "Prophecy", "PCY");
  }
}

module.exports = RhysticCircle;
