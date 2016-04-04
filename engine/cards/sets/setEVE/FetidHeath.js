"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FetidHeath extends Card {
  constructor(game) {
    super(game, "Fetid Heath", "Eventide", "EVE");
  }
}

module.exports = FetidHeath;
