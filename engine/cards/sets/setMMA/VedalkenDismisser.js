"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenDismisser extends Card {
  constructor(game) {
    super(game, "Vedalken Dismisser", "Modern Masters", "MMA");
  }
}

module.exports = VedalkenDismisser;
