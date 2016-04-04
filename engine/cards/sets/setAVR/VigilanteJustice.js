"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigilanteJustice extends Card {
  constructor(game) {
    super(game, "Vigilante Justice", "Avacyn Restored", "AVR");
  }
}

module.exports = VigilanteJustice;
