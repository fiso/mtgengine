"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flensermite extends Card {
  constructor(game) {
    super(game, "Flensermite", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Flensermite;
