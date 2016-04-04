"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Slagstorm extends Card {
  constructor(game) {
    super(game, "Slagstorm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Slagstorm;
