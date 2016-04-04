"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phyresis extends Card {
  constructor(game) {
    super(game, "Phyresis", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Phyresis;
