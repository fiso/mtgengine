"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardsSchool extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizards' School", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = WizardsSchool;
