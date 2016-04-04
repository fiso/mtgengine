"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlerRogue extends Card {
  constructor(game) {
    super(game, "Whirler Rogue", "Magic Origins", "ORI");
  }
}

module.exports = WhirlerRogue;
