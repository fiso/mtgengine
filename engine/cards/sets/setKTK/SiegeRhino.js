"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SiegeRhino extends Card {
  constructor(game) {
    super(game, "Siege Rhino", "Khans of Tarkir", "KTK");
  }
}

module.exports = SiegeRhino;
