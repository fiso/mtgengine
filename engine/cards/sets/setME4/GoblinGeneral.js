"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGeneral extends Card {
  constructor(game) {
    super(game, "Goblin General", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinGeneral;
