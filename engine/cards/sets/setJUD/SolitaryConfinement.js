"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolitaryConfinement extends Card {
  constructor(game) {
    super(game, "Solitary Confinement", "Judgment", "JUD");
  }
}

module.exports = SolitaryConfinement;
