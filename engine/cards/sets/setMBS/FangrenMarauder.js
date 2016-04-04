"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FangrenMarauder extends Card {
  constructor(game) {
    super(game, "Fangren Marauder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FangrenMarauder;
