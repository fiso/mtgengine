"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardsSchool extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizards' School", "Homelands", "HML");
  }
}

module.exports = WizardsSchool;
