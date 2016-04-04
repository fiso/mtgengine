"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WizardsSchool extends Card {
  constructor(game) {
    super(game, "Wizards' School", "Homelands", "HML");
  }
}

module.exports = WizardsSchool;
