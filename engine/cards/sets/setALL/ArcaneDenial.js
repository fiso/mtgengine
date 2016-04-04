"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcaneDenial extends Card {
  constructor(game) {
    super(game, "Arcane Denial", "Alliances", "ALL");
  }
}

module.exports = ArcaneDenial;
