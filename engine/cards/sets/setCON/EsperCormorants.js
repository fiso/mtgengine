"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EsperCormorants extends Card {
  constructor(game) {
    super(game, "Esper Cormorants", "Conflux", "CON");
  }
}

module.exports = EsperCormorants;
