"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NomadsAssembly extends Card {
  constructor(game) {
    super(game, "Nomads' Assembly", "Commander 2014", "C14");
  }
}

module.exports = NomadsAssembly;
