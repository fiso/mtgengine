"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarooMeerkat extends Card {
  constructor(game) {
    super(game, "Karoo Meerkat", "Mirage", "MIR");
  }
}

module.exports = KarooMeerkat;
