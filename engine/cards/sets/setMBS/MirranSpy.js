"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirranSpy extends Card {
  constructor(game) {
    super(game, "Mirran Spy", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MirranSpy;
