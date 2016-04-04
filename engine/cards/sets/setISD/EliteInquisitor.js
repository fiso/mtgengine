"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteInquisitor extends Card {
  constructor(game) {
    super(game, "Elite Inquisitor", "Innistrad", "ISD");
  }
}

module.exports = EliteInquisitor;
