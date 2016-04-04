"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarFalcon extends Card {
  constructor(game) {
    super(game, "War Falcon", "Magic 2013", "M13");
  }
}

module.exports = WarFalcon;
