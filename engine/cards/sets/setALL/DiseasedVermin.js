"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiseasedVermin extends Card {
  constructor(game) {
    super(game, "Diseased Vermin", "Alliances", "ALL");
  }
}

module.exports = DiseasedVermin;
