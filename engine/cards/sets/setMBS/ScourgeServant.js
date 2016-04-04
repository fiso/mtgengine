"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScourgeServant extends Card {
  constructor(game) {
    super(game, "Scourge Servant", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ScourgeServant;
