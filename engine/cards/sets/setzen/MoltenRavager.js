"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenRavager extends Card {
  constructor(game) {
    super(game, "Molten Ravager", "Zendikar", "ZEN");
  }
}

module.exports = MoltenRavager;
