"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vivisection extends Card {
  constructor(game) {
    super(game, "Vivisection", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Vivisection;
