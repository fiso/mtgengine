"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireImp extends Card {
  constructor(game) {
    super(game, "Fire Imp", "Masters Edition IV", "ME4");
  }
}

module.exports = FireImp;
