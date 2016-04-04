"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatalystStone extends Card {
  constructor(game) {
    super(game, "Catalyst Stone", "Odyssey", "ODY");
  }
}

module.exports = CatalystStone;
