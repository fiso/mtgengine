"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanishmentDecree extends Card {
  constructor(game) {
    super(game, "Banishment Decree", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BanishmentDecree;
