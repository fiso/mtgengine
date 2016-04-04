"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildLeotau extends Card {
  constructor(game) {
    super(game, "Wild Leotau", "Conflux", "CON");
  }
}

module.exports = WildLeotau;
