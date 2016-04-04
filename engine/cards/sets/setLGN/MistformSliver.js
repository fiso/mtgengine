"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistformSliver extends Card {
  constructor(game) {
    super(game, "Mistform Sliver", "Legions", "LGN");
  }
}

module.exports = MistformSliver;
