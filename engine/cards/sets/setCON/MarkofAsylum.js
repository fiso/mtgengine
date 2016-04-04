"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkofAsylum extends Card {
  constructor(game) {
    super(game, "Mark of Asylum", "Conflux", "CON");
  }
}

module.exports = MarkofAsylum;
