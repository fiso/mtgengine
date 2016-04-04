"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndigoFaerie extends Card {
  constructor(game) {
    super(game, "Indigo Faerie", "Eventide", "EVE");
  }
}

module.exports = IndigoFaerie;
