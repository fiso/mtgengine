"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuergarAssailant extends Card {
  constructor(game) {
    super(game, "Duergar Assailant", "Eventide", "EVE");
  }
}

module.exports = DuergarAssailant;
