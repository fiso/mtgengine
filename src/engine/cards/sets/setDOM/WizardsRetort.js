"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardsRetort extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizard's Retort", "Dominaria", "DOM");
  }
}

module.exports = WizardsRetort;
