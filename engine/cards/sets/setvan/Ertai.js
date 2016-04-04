"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ertai extends Card {
  constructor(game) {
    super(game, "Ertai", "Vanguard", "VAN");
  }
}

module.exports = Ertai;
