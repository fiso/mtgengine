"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhoxMeditant extends Card {
  constructor(game) {
    super(game, "Rhox Meditant", "Conflux", "CON");
  }
}

module.exports = RhoxMeditant;
