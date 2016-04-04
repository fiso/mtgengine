"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OxiddaDaredevil extends Card {
  constructor(game) {
    super(game, "Oxidda Daredevil", "Scars of Mirrodin", "SOM");
  }
}

module.exports = OxiddaDaredevil;
