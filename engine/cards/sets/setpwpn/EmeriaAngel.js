"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmeriaAngel extends Card {
  constructor(game) {
    super(game, "Emeria Angel", "WPN and Gateway", "pWPN");
  }
}

module.exports = EmeriaAngel;
