"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crush extends Card {
  constructor(game) {
    super(game, "Crush", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Crush;
