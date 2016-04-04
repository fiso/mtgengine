"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirranMettle extends Card {
  constructor(game) {
    super(game, "Mirran Mettle", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MirranMettle;
