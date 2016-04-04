"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContagiousNim extends Card {
  constructor(game) {
    super(game, "Contagious Nim", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ContagiousNim;
