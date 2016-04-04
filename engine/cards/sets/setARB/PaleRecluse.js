"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaleRecluse extends Card {
  constructor(game) {
    super(game, "Pale Recluse", "Alara Reborn", "ARB");
  }
}

module.exports = PaleRecluse;
