"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenAnatomist extends Card {
  constructor(game) {
    super(game, "Vedalken Anatomist", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VedalkenAnatomist;
