"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NettleSwine extends Card {
  constructor(game) {
    super(game, "Nettle Swine", "Avacyn Restored", "AVR");
  }
}

module.exports = NettleSwine;
