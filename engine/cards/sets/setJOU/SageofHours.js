"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SageofHours extends Card {
  constructor(game) {
    super(game, "Sage of Hours", "Journey into Nyx", "JOU");
  }
}

module.exports = SageofHours;
