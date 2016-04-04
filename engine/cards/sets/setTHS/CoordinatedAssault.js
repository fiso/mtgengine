"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoordinatedAssault extends Card {
  constructor(game) {
    super(game, "Coordinated Assault", "Theros", "THS");
  }
}

module.exports = CoordinatedAssault;
