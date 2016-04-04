"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RotWolf extends Card {
  constructor(game) {
    super(game, "Rot Wolf", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RotWolf;
