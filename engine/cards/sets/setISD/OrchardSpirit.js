"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrchardSpirit extends Card {
  constructor(game) {
    super(game, "Orchard Spirit", "Innistrad", "ISD");
  }
}

module.exports = OrchardSpirit;
