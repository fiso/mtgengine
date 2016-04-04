"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErsatzGnomes extends Card {
  constructor(game) {
    super(game, "Ersatz Gnomes", "Mirage", "MIR");
  }
}

module.exports = ErsatzGnomes;
