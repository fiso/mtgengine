"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerumRaker extends Card {
  constructor(game) {
    super(game, "Serum Raker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SerumRaker;
