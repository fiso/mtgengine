"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mirri extends Card {
  constructor(game) {
    super(game, "Mirri", "Vanguard", "VAN");
  }
}

module.exports = Mirri;
