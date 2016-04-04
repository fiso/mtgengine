"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MatcaRioters extends Card {
  constructor(game) {
    super(game, "Matca Rioters", "Conflux", "CON");
  }
}

module.exports = MatcaRioters;
