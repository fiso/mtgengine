"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skinwing extends Card {
  constructor(game) {
    super(game, "Skinwing", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Skinwing;
