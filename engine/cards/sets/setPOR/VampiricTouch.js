"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricTouch extends Card {
  constructor(game) {
    super(game, "Vampiric Touch", "Portal", "POR");
  }
}

module.exports = VampiricTouch;
