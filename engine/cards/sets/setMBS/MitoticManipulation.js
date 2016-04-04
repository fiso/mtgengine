"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MitoticManipulation extends Card {
  constructor(game) {
    super(game, "Mitotic Manipulation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MitoticManipulation;
