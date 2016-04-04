"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcaneLaboratory extends Card {
  constructor(game) {
    super(game, "Arcane Laboratory", "Seventh Edition", "7ED");
  }
}

module.exports = ArcaneLaboratory;
