"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmobilizingInk extends Card {
  constructor(game) {
    super(game, "Immobilizing Ink", "Odyssey", "ODY");
  }
}

module.exports = ImmobilizingInk;
