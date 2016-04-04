"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadSpecter extends Card {
  constructor(game) {
    super(game, "Dread Specter", "Mirage", "MIR");
  }
}

module.exports = DreadSpecter;
