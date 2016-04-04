"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tawnos extends Card {
  constructor(game) {
    super(game, "Tawnos", "Vanguard", "VAN");
  }
}

module.exports = Tawnos;
