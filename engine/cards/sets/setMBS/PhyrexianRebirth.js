"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianRebirth extends Card {
  constructor(game) {
    super(game, "Phyrexian Rebirth", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRebirth;
