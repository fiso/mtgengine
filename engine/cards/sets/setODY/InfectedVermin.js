"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfectedVermin extends Card {
  constructor(game) {
    super(game, "Infected Vermin", "Odyssey", "ODY");
  }
}

module.exports = InfectedVermin;
