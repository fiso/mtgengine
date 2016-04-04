"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianCrusader extends Card {
  constructor(game) {
    super(game, "Phyrexian Crusader", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianCrusader;
