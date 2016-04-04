"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicSurgery extends Card {
  constructor(game) {
    super(game, "Psychic Surgery", "New Phyrexia", "NPH");
  }
}

module.exports = PsychicSurgery;
